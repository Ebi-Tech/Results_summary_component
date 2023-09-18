"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var icon_reaction_svg_1 = require("@/public/assets/images/icon-reaction.svg");
var icon_memory_svg_1 = require("@/public/assets/images/icon-memory.svg");
var icon_verbal_svg_1 = require("@/public/assets/images/icon-verbal.svg");
var icon_visual_svg_1 = require("@/public/assets/images/icon-visual.svg");
var RightSide = function () {
    return (React.createElement("div", { className: 'w-[50%] h=full p-5 flex flex-col gap-4 ' },
        React.createElement("h2", null, "Summary"),
        React.createElement("div", { className: 'flex flex-col   ' },
            React.createElement("button", { className: 'flex flex-row w-full p-1 rounded-lg font-semibold items-centre\r\n             bg-Light-red bg-opacity-5' },
                React.createElement(image_1["default"], { src: icon_reaction_svg_1["default"], alt: 'react', width: 20, priority: true, className: 'mr-4' }),
                React.createElement("p", { className: 'text-[16px] text-Light-red mr-auto' }, "Reaction"),
                React.createElement("p", { className: 'text-[14px] ' },
                    "80  ",
                    React.createElement("span", { className: 'text-Light-lavender' }, " / 100"))),
            React.createElement("br", null),
            React.createElement("button", { className: 'flex flex-row w-full  p-1 rounded-lg font-semibold items-center\r\n             bg-Orangey-yellow bg-opacity-5' },
                React.createElement(image_1["default"], { src: icon_memory_svg_1["default"], alt: 'react', width: 20, priority: true, className: 'mr-4' }),
                React.createElement("p", { className: 'text-[16px] text-Orangey-yellow mr-auto' }, "Memory"),
                React.createElement("p", { className: 'text-[14px] ' },
                    "92  ",
                    React.createElement("span", { className: 'text-Light-lavender' }, "  /  100"))),
            React.createElement("br", null),
            React.createElement("button", { className: 'flex flex-row w-full  p-1 rounded-lg font-semibold items-center\r\n             bg-Green-teal bg-opacity-5' },
                React.createElement(image_1["default"], { src: icon_verbal_svg_1["default"], alt: 'react', width: 20, priority: true, className: 'mr-4' }),
                React.createElement("p", { className: 'text-[16px] text-Green-teal mr-auto' }, "Verbal"),
                React.createElement("p", { className: 'text-[14px] ' },
                    "61  ",
                    React.createElement("span", { className: 'text-Light-lavender' }, "  /  100"))),
            React.createElement("br", null),
            React.createElement("button", { className: 'flex flex-row w-full  p-1 rounded-lg font-semibold items-center\r\n             bg-Cobalt-blue bg-opacity-5' },
                React.createElement(image_1["default"], { src: icon_visual_svg_1["default"], alt: 'react', width: 20, priority: true, className: 'mr-4' }),
                React.createElement("p", { className: 'text-[16px] text-Cobalt-blue mr-auto' }, "Visual"),
                React.createElement("p", { className: 'text-[14px] ' },
                    "72  ",
                    React.createElement("span", { className: 'text-Light-lavender' }, "  /  100")))),
        React.createElement("button", { className: 'flex flex-row  rounded-full items-center justify-center \r\n           w-full h-1 p-5 bg-gradient-to-b from-Violet-blue to-Persian-blue ' },
            React.createElement("p", { className: 'text-White text-[14px] font-semibold ' }, "Continue"))));
};
exports["default"] = RightSide;
