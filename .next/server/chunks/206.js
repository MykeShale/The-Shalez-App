exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 3425:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3638));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 408, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 53, 23))

/***/ }),

/***/ 5599:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7503))

/***/ }),

/***/ 2154:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 3638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js + 1 modules
var disclosure = __webpack_require__(4702);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(4832);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(1966);
;// CONCATENATED MODULE: ./app/components/Navbar/Drawer.tsx




const Drawer = ({ children , isOpen , setIsOpen  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " + (isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0  " : " transition-all delay-500 opacity-0 -translate-x-full  "),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " + (isOpen ? "translate-x-0" : "-translate-x-full"),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                    className: "relative w-340px max-w-lg pb-10 flex flex-col space-y-6 h-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                            className: "px-4 py-4 flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-shrink-0 items-center border-right",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: "text-2xl font-semibold text-black",
                                        children: "The Shalez"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                                    className: "block h-6 w-6",
                                    onClick: ()=>{
                                        setIsOpen(false);
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>{
                                setIsOpen(false);
                            },
                            children: children
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "w-screen h-full cursor-pointer ",
                onClick: ()=>{
                    setIsOpen(false);
                }
            })
        ]
    });
};
/* harmony default export */ const Navbar_Drawer = (Drawer);

;// CONCATENATED MODULE: ./app/components/Navbar/Drawerdata.tsx



const navigation = [
    {
        name: "Home",
        href: "/",
        current: false
    },
    {
        name: "Services",
        href: "/services",
        current: false
    },
    {
        name: "About Us",
        href: "/about-us",
        current: false
    },
    {
        name: "Projects",
        href: "/projects",
        current: false
    },
    {
        name: "Pricing",
        href: "/pricing",
        current: false
    },
    {
        name: "Contact",
        href: "/contact",
        current: false
    },
    {
        name: "Blog",
        href: "/blog",
        current: false
    }
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const Data = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "rounded-md max-w-sm w-full mx-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex-1 space-y-4 py-1",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sm:block",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-y-1 px-5 pt-2 pb-3",
                    children: [
                        navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: item.href,
                                className: classNames(item.current ? "bg-gray-900 text-purple" : "text-black hover:bg-gray-700 hover:text-purple", "block  py-2 rounded-md text-base font-medium"),
                                "aria-current": item.current ? "page" : undefined,
                                children: item.name
                            }, item.name)),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-4"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "bg-theme1 w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded",
                            children: "Contact Us"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Drawerdata = (Data);

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 4 modules
var transition = __webpack_require__(6235);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js + 28 modules
var dialog = __webpack_require__(6762);
;// CONCATENATED MODULE: ./app/components/Navbar/Contactus.tsx
/* __next_internal_client_entry_do_not_use__  auto */ 



// import { useForm } from "react-hook-form";
// ...
// const SignupForm = ({ title }) => {
//     // prevent submitting invalid or empty emails
//     const { register, errors, handleSubmit } = useForm();
//     // handle form submit
//     const onSubmit = (data) => console.log({ data });
const Contactusform = ()=>{
    let [isOpen, setIsOpen] = (0,react_.useState)(false);
    const [inputValues, setInputValues] = (0,react_.useState)({
        input1: "",
        input2: "",
        input3: ""
    });
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setInputValues((prevState)=>({
                ...prevState,
                [name]: value
            }));
    };
    const handleClick = ()=>{
        alert(`Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`);
        setIsOpen(false);
    };
    // FORM SUBMIT
    const handleSubmit = (event)=>{
        event.preventDefault();
    // handle form submission
    };
    const isDisabled = Object.values(inputValues).some((value)=>value === "");
    const closeModal = ()=>{
        setIsOpen(false);
    };
    const openModal = ()=>{
        setIsOpen(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden lg:block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-theme1 hover:text-white hover:border-transparent",
                        onClick: openModal,
                        children: "Reach Us"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                appear: true,
                show: isOpen,
                as: react_.Fragment,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog/* Dialog */.V, {
                    as: "div",
                    className: "relative z-50",
                    onClose: closeModal,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition.Child */.u.Child, {
                            as: react_.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "fixed inset-0 bg-black bg-opacity-25"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex min-h-full items-center justify-center p-4 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition.Child */.u.Child, {
                                    as: react_.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 scale-95",
                                    enterTo: "opacity-100 scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 scale-100",
                                    leaveTo: "opacity-0 scale-95",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog.Panel */.V.Panel, {
                                        className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "py-8 lg:py-8 px-4 mx-auto max-w-screen-md",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex flex-shrink-0 items-center justify-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        className: "text-2xl sm:text-4xl font-semibold text-theme1",
                                                        children: "The Shalez"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-8 lg:mb-10 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl",
                                                    children: "Reach us now for Enquiries or feedback\uD83D\uDE0A"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    action: "#",
                                                    className: "space-y-8",
                                                    onSubmit: handleSubmit,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    htmlFor: "text",
                                                                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                                    children: "Your Name"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    id: "text",
                                                                    name: "input1",
                                                                    value: inputValues.input1,
                                                                    onChange: handleChange,
                                                                    type: "text",
                                                                    autoComplete: "current-password",
                                                                    required: true,
                                                                    className: "relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                                                                    placeholder: "Name..."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    htmlFor: "email",
                                                                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                                    children: "Your email"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    id: "email",
                                                                    name: "input2",
                                                                    value: inputValues.input2,
                                                                    onChange: handleChange,
                                                                    type: "email",
                                                                    autoComplete: "current-password",
                                                                    required: true,
                                                                    className: "relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                                                                    placeholder: "xyz@email.com"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "sm:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    htmlFor: "message",
                                                                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",
                                                                    children: "Your message"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                    id: "message",
                                                                    name: "input3",
                                                                    value: inputValues.input3,
                                                                    onChange: handleChange,
                                                                    className: "relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                                                                    placeholder: "Leave a comment..."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "submit",
                                                            onClick: handleClick,
                                                            disabled: isDisabled,
                                                            className: "py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-theme1 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
                                                            children: "Send message"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            className: "text-center text-lg font-medium",
                                                            children: "Or Give us a Call: 0792 099 302"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Contactus = (Contactusform);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var next_navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./app/components/Navbar/Navbar.tsx
/* __next_internal_client_entry_do_not_use__  auto */ 









const Navbar_navigation = [
    {
        name: "Home",
        href: "/",
        current: false
    },
    {
        name: "Services",
        href: "/services",
        current: false
    },
    {
        name: "About Us",
        href: "/about-us",
        current: false
    },
    {
        name: "Projects",
        href: "/projects",
        current: false
    },
    {
        name: "Pricing",
        href: "/pricing",
        current: false
    },
    //{ name: 'Contact', href: '/contact', current: false },
    {
        name: "Blog",
        href: "/blog",
        current: false
    }
];
function Navbar_classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const Navbar = ()=>{
    const [isOpen, setIsOpen] = react_default().useState(false);
    const pathname = (0,next_navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p, {
        as: "nav",
        className: "navbar",
        children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-auto max-w-7xl p-3 md:p-4 lg:px-8",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative flex h-12 sm:h-20 items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-1 items-center sm:justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-shrink-0 items-center border-right",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/navbar/2.png",
                                            alt: "hero-image",
                                            width: 150,
                                            height: 20
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden lg:flex items-center border-right ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex justify-end space-x-4",
                                        children: Navbar_navigation.map((item)=>// const isActive = pathname.startsWith(navigation.href)
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: item.href,
                                                className: Navbar_classNames(item.current ? "bg-gray-900" : "navlinks hover:text-theme1 text-theme4 hover:font-bold", "px-3 py-4 rounded-md text-lg font-normal space-link"),
                                                "aria-current": item.href ? "page" : undefined,
                                                children: item.name
                                            }, item.name))
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Contactus, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "block lg:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon/* default */.Z, {
                                className: "block h-6 w-6",
                                "aria-hidden": "true",
                                onClick: ()=>setIsOpen(true)
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Drawer, {
                            isOpen: isOpen,
                            setIsOpen: setIsOpen,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Drawerdata, {})
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./app/components/Navbar/index.tsx
/* __next_internal_client_entry_do_not_use__  auto */ 


const Navbarin = ()=>{
    (0,react_.useEffect)(()=>{
        // The debounce function receives our function as a parameter
        const debounce = (fn)=>{
            // This holds the requestAnimationFrame reference, so we can cancel it if we wish
            let frame;
            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params)=>{
                // If the frame variable has been defined, clear it now, and queue for next frame
                if (frame) {
                    cancelAnimationFrame(frame);
                }
                // Queue our function call for the next frame
                frame = requestAnimationFrame(()=>{
                    // Call our function and pass any params we received
                    fn(...params);
                });
            };
        };
        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = ()=>{
            document.documentElement.dataset.scroll = window.scrollY.toString();
        };
        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener("scroll", debounce(storeScroll), {
            passive: true
        });
        // Update scroll position for first time
        storeScroll();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {})
    });
};
/* harmony default export */ const components_Navbar = (Navbarin);


/***/ }),

/***/ 7503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5638);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const variants = {
    hidden: {
        opacity: 0,
        x: -200,
        y: 0
    },
    enter: {
        opacity: 1,
        x: 0,
        y: 0
    }
};
function Template({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion.main */ .E.main, {
        variants: variants,
        initial: "hidden",
        animate: "enter",
        transition: {
            type: "linear"
        },
        children: children
    });
} // Edit for merge requests learning


/***/ }),

/***/ 1488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  auto */ const { createProxy  } = __webpack_require__(5985);
module.exports = createProxy("/home/mykesh/Desktop/Code/the-shalez-app/app/components/Navbar/index.tsx");


/***/ }),

/***/ 7881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
// EXTERNAL MODULE: ./app/components/Navbar/index.tsx
var Navbar = __webpack_require__(1488);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/components/Footer/index.tsx



const products = [
    {
        id: 1,
        section: "Menu",
        link: [
            "Home",
            "Popular",
            "About",
            "Contact"
        ]
    },
    {
        id: 2,
        section: "Category",
        link: [
            "Design",
            "Mockup",
            "View all",
            "Log In"
        ]
    },
    {
        id: 3,
        section: "Pages",
        link: [
            "404",
            "Instructions",
            "License"
        ]
    },
    {
        id: 4,
        section: "Others",
        link: [
            "Styleguide",
            "Changelog"
        ]
    }
];
const footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-black -mt-20",
        id: "first-section",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-span-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/navbar/1.png",
                                    alt: "hero-image",
                                    width: 180,
                                    height: 20,
                                    className: "mb-4"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-icons",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://facebook.com/theshalez",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/images/footer/vec.svg",
                                                    alt: "facebook",
                                                    width: 15,
                                                    height: 20
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-icons",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://twitter.com/mykeshale",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/images/footer/twitter.svg",
                                                    alt: "twitter",
                                                    width: 20,
                                                    height: 20
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-icons",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://instagram.com/theshalez",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/images/footer/instagram.svg",
                                                    alt: "instagram",
                                                    width: 20,
                                                    height: 20
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-white text-2xl font-bold mt-4",
                                    children: "Call: 0792 099 302"
                                })
                            ]
                        }),
                        products.map((product)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "group relative col-span-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-white text-xl font-extrabold mb-9",
                                        children: product.section
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: product.link.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-5",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    className: "text-white text-lg font-normal mb-6 space-links",
                                                    children: link
                                                })
                                            }, index))
                                    })
                                ]
                            }, product.id))
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-auto max-w-2xl lg:max-w-7xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "text-center md:text-start text-offwhite text-lg",
                                    children: [
                                        "\xa9 ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "The Shalez:"
                                        }),
                                        " 2020-2024.   All Rights Reserved."
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-center md:justify-end",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-offwhite pr-6",
                                            children: "Privacy policy"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-offwhite pl-6 border-solid border-l border-footer",
                                            children: "Terms & conditions"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Footer = (footer);

;// CONCATENATED MODULE: ./app/layout.tsx




const metadata = {
    title: "The Shalez || Shaping the Digital Universe",
    description: "Beyond aesthetics, we build experiences that resonate."
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 4530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$typeof": () => (/* binding */ $$typeof),
/* harmony export */   "__esModule": () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/mykesh/Desktop/Code/the-shalez-app/app/template.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);


/***/ }),

/***/ 4756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;