// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.0;

contract Vault {
    bool isLock;
    mapping(address => uint) public voucher;

    function issue(address to) external payable {
        voucher[to] += msg.value;
    }

    function redeem() external payable Lock {
        uint withDrawAmount = voucher[msg.sender];
        payable(msg.sender).call{value: withDrawAmount}("");
        voucher[msg.sender] = 0;
    }

    modifier Lock() {
        require(isLock == false);
        isLock = true;
        _;
        isLock = false;
    }

    receive() external payable {}
}
