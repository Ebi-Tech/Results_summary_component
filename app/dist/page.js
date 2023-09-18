"use strict";
exports.__esModule = true;
var LeftSide_1 = require("@/component/LeftSide");
var RightSide_1 = require("@/component/RightSide");
function Home() {
    return (React.createElement("main", { className: "flex bg-White w-50 h-50 items-center justify-center p-24" },
        React.createElement("div", { className: 'flex w-[45%] h-[85%] bg-White shadow-2xl rounded-xl overflow-hidden ' },
            React.createElement(LeftSide_1["default"], null),
            React.createElement(RightSide_1["default"], null))));
}
exports["default"] = Home;
