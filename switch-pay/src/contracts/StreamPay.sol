// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StreamPay {

    struct Stream {
        address sender;
        address recipient;
        uint256 ratePerSecond;
        uint256 startTime;
        uint256 endTime;
        uint256 deposited;
        uint256 withdrawn;

    }

    mapping (uint256 => Stream) public Streams;

    uint256 public streamCount;

    event StreamCreated(uint256 streamId,address sender, address recipient, uint256 rate);
    event Withdraw(uint256 StreamId, uint256 amount);


    function createStream(address recipient, uint256 ratePerSecond, uint256 duration) external payable  {

         require(msg.value >= ratePerSecond * duration, "Not enough funds");

         streamCount++;

         Streams[streamCount] = Stream({
            sender : msg.sender,
            recipient: recipient,
            ratePerSecond: ratePerSecond,
            startTime: block.timestamp,
            endTime: block.timestamp + duration,
            deposited: msg.value,
            withdrawn: 0
         });

         emit StreamCreated(streamCount, msg.sender, recipient, ratePerSecond);

    }

    function withdraw(uint256 StreamId) external {
        Stream storage s = Streams[StreamId];

        require(msg.sender == s.recipient, "Not recipient");

        uint256 elapsed = block.timestamp > s.endTime ? s.endTime - s.startTime : block.timestamp - s.startTime;

        uint256 vested = elapsed * s.ratePerSecond;
        
        uint256 amount = vested -s.withdrawn;

        require(amount > 0, "Nothing to withdraw");

        s.withdrawn += amount;

        payable(s.recipient).transfer(amount);

        emit Withdraw(StreamId, amount);
      }
}