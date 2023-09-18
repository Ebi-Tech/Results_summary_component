"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LeftSide = function () {
    return (react_1["default"].createElement("div", { className: 'w-[50%] h=full flex flex-col items-center p-4 justify-center gap-11 rounded-2xl\r\n        bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue' },
        react_1["default"].createElement("h2", { className: 'text-Light-lavender text-[20px] font-semibold' }, "Your Result"),
        react_1["default"].createElement("button", { className: 'flex flex-col  rounded-full items-center justify-center \r\n           w-36 h-36 p-10 bg-gradient-to-b from-Violet-blue to-Persian-blue ' },
            react_1["default"].createElement("p", { className: 'text-White text-[50px] font-black ' }, "76"),
            react_1["default"].createElement("p", { className: 'text-Light-lavender text-[14px] ' }, "of 100")),
        react_1["default"].createElement("div", { className: ' flex flex-col items-center' },
            react_1["default"].createElement("p", { className: 'text-White text-[23px] font-bold' }, "Great"),
            react_1["default"].createElement("p", { className: 'text-Light-lavender text-[17px] text-center mx-6' }, "You scored higher than 65% of the people who have taken these tests."))));
};
exports["default"] = LeftSide;
