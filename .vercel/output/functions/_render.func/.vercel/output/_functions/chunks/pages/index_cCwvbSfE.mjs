/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderSlot, j as renderComponent, k as renderHead } from '../astro_mEKppNR-.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const link = {
    title: pathname === "/" ? "tips" : "home",
    path: pathname === "/" ? "/tips" : "/"
  };
  return renderTemplate`${maybeRenderHead()}<header class="z-50 inset-0"> <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global"> <div class="flex lg:flex-1"> <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 64 64"> <g id="Layer_14" data-name="Layer 14"> <path d="M32,1A31,31,0,1,1,1,32,31,31,0,0,1,32,1m0-1C14.33,0,0,14.33,0,32S14.33,64,32,64,64,49.67,64,32,49.67,0,32,0Z" fill="#76a4a5"></path> <path d="M32,12A20,20,0,1,1,12,32,20,20,0,0,1,32,12m0-1A21,21,0,1,0,53,32,21,21,0,0,0,32,11Z" fill="#f7c52c"></path> <path d="M32,17a15,15,0,1,1-15,15A15,15,0,0,1,32,17m0-1a16,16,0,1,0,16,16A16,16,0,0,0,32,16Z" fill="#e6e7e8"></path> <path d="M32,22a10,10,0,1,1-10,10A10,10,0,0,1,32,22m0-1a11,11,0,1,0,11,11A11,11,0,0,0,32,21Z" fill="#76a4a5"></path> <path d="M32,25a7,7,0,1,1-7,7A7,7,0,0,1,32,25m0-1a8,8,0,1,0,8,8A8,8,0,0,0,32,24Z" fill="#e6e7e8"></path> <circle cx="32" cy="32" r="4" fill="#76a4a5"></circle> </g> </svg> </div> <div class="flex lg:hidden"> <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"> <span class="sr-only">Open main menu</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> </button> </div> <div class="hidden lg:flex lg:flex-1 lg:justify-end"> <a${addAttribute(link.path, "href")} class="text-sm font-semibold leading-6 text-white hover:text-gray-200"> ${link.title} <span aria-hidden="true">&rarr;</span></a> </div> </nav> </header>`;
}, "/Users/edancerys/repositories/password-generator/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><!-- add favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous"><\/script><!-- @meta --><title>', '</title><meta name="keywords" content="your, keywords, here"><meta name="author" content="Your Name"><meta name="description" content="A description of your page">', '</head> <body class="flex flex-col h-screen bg-gray-900 text-gray-50"> ', ' <section class="flex flex-1 flex-col"> ', " </section> </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]));
}, "/Users/edancerys/repositories/password-generator/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Banner;
  return renderTemplate`${maybeRenderHead()}<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"> <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"> <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"> <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div> </div> <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"> <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div> </div> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl lg:mx-0"> <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
Protect Your Data with Strong Passwords
</h2> <p class="mt-6 text-lg leading-8 text-gray-300">
PassGen Plus is a powerful password generator that creates unique and
        complex passwords to help protect your sensitive information from
        unauthorized access. With the ability to customize the length and
        character set of your passwords, PassGen Plus ensures that your data
        remains safe and secure.
</p> </div> <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"> <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-5 flex-none text-indigo-400"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path> </svg> <div class="text-base leading-7"> <h3 class="font-semibold text-white">Enhanced Security</h3> <p class="mt-2 text-gray-300">
Strong passwords provide a higher level of protection against
            unauthorized access.
</p> </div> </div> <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-5 flex-none text-indigo-400"> <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path> </svg> <div class="text-base leading-7"> <h3 class="font-semibold text-white">Data Confidentiality</h3> <p class="mt-2 text-gray-300">
Strong passwords help safeguard sensitive information and maintain
            confidentiality.
</p> </div> </div> <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-5 flex-none text-indigo-400"> <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"></path> </svg> <div class="text-base leading-7"> <h3 class="font-semibold text-white">Reduced Risk of Hacking</h3> <p class="mt-2 text-gray-300">
Generating robust passwords lowers the likelihood of falling victim
            to hacking attempts.
</p> </div> </div> </div> <section class="text-center text-gray-400"> <p class="mt-6 text-lg leading-8">
In today's digital age, protecting your sensitive information is
        paramount. With cyber threats on the rise, having a secure password is
        the first line of defense against unauthorized access to your accounts.
        PassGen Plus simplifies the process of creating robust passwords that
        are virtually impossible to crack, ensuring your data remains safe and
        secure.
</p> <p class="mt-6 text-lg leading-8">
By generating unique and complex passwords for each of your accounts,
        you significantly reduce the risk of falling victim to hacking attempts.
        Don't compromise your online security with weak or easily guessable
        passwords. Trust PassGen Plus to provide you with the tools needed to
        fortify your defenses and safeguard your personal information from
        potential breaches.
</p> </section> </div> </div>`;
}, "/Users/edancerys/repositories/password-generator/src/components/Banner.astro", void 0);

function Checkbox(props) {
  const [checked, setChecked] = useState(!!props.checked);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex items-start", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ jsx(
      "input",
      {
        id: props.id ?? props.name,
        "aria-describedby": "comments-description",
        name: props.name,
        type: "checkbox",
        checked,
        onChange: () => setChecked(!checked),
        className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 ml-3 text-sm leading-6", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: props.id ?? props.name,
          className: "font-medium text-gray-100 cursor-pointer",
          children: props.label
        }
      ),
      props.description && /* @__PURE__ */ jsx("span", { id: "comments-description", className: "text-gray-500", children: props.description })
    ] })
  ] });
}

function classNames(...classes) {
  const merged = classes.filter(Boolean).join(" ");
  return twMerge(merged);
}

function generateRandomPassword(props) {
  const { strength = "strong", length = 12, options } = props;
  let charset = "";
  if (options?.uppercase)
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (options?.lowercase)
    charset += "abcdefghijklmnopqrstuvwxyz";
  if (options?.numbers)
    charset += "0123456789";
  if (options?.symbols)
    charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}
function calculatePasswordStrength(password) {
  let strength = 0;
  if (password.length < 6)
    return "weak";
  if (password.length >= 8)
    strength++;
  if (password.length > 12)
    strength++;
  if (password.match(/[a-z]+/))
    strength++;
  if (password.match(/[A-Z]+/))
    strength++;
  if (password.match(/[0-9]+/))
    strength++;
  if (password.match(/[$@#&!]+/))
    strength++;
  if (strength < 3)
    return "weak";
  if (strength < 4)
    return "medium";
  if (strength < 5)
    return "strong";
  return "very-strong";
}

const Loading = () => {
  return /* @__PURE__ */ jsx("span", { className: "absolute z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      className: "animate-spin w-6 h-6",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        }
      )
    }
  ) });
};
function Button(props) {
  return /* @__PURE__ */ jsxs("section", { className: "relative", children: [
    props.fetching && /* @__PURE__ */ jsx(Loading, {}),
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: props.type ?? "button",
        onClick: props?.callBack,
        className: classNames(
          "rounded-md bg-indigo-600 px-6 py-2 w-full text-sm font-semibold text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out",
          props?.fetching && "cursor-not-allowed opacity-25",
          props?.class ?? ""
        ),
        id: props.id,
        disabled: props.fetching,
        children: [
          props.children,
          props.label
        ]
      }
    )
  ] });
}

const MIN_VALUE = 6;
const MAX_VALUE = 60;
function Slider(props) {
  const [value, setValue] = useState(props?.minValue ?? MIN_VALUE);
  const [isDragging, setIsDragging] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    const handleMouseDown = () => {
      setIsDragging(true);
    };
    const sliderContainer = document.getElementById("slider-container");
    sliderContainer?.addEventListener("mousedown", handleMouseDown);
    sliderContainer?.addEventListener("mouseup", () => {
      setTimeout(() => {
        handleMouseUp();
      }, 1e3);
    });
    return () => {
      sliderContainer?.removeEventListener("mousedown", handleMouseDown);
      sliderContainer?.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs("div", { className: "relative", id: "slider-container", children: [
    props.label && /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: props.id ?? props.name,
        className: "font-medium text-gray-100",
        children: props.label
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "range",
        id: props.id ?? props.name,
        min: MIN_VALUE,
        max: MAX_VALUE,
        value,
        onChange: handleChange,
        className: "slider-thumb w-full h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer",
        name: props.name
      }
    ),
    isDragging && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute -top-6 w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full shadow-slider",
        style: {
          left: `calc(${(value - MIN_VALUE) / (MAX_VALUE - MIN_VALUE) * 100}% - ${value / 2}px)`
        },
        children: value
      }
    )
  ] }) });
}

const PasswordGenerator = () => {
  const [state, setState] = useState({
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    password: ""
  });
  const isAllDisabled = !state.numbers && !state.symbols && !state.uppercase && !state.lowercase;
  function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const config = Object.fromEntries(formData);
    const psw = generateRandomPassword({
      length: Number(config?.[`slider-thumb`]),
      options: {
        numbers: config.numbers === "on",
        symbols: config.symbols === "on",
        uppercase: config.uppercase === "on",
        lowercase: config.lowercase === "on",
        excludeSimilarCharacters: false,
        excludeAmbiguousCharacters: false
      }
    });
    const strength = calculatePasswordStrength(psw);
    console.log("FORM ", config, psw, strength);
    setState({ ...state, password: psw, strength });
  }
  function onChange(event) {
    let { name, value, checked } = event.target;
    const psw = generateRandomPassword({
      length: name === "slider-thumb" ? Number(value) : state.length,
      options: {
        numbers: name === "numbers" ? checked : state.numbers,
        symbols: name === "symbols" ? checked : state.symbols,
        uppercase: name === "uppercase" ? checked : state.uppercase,
        lowercase: name === "lowercase" ? checked : state.lowercase,
        excludeSimilarCharacters: false,
        excludeAmbiguousCharacters: false
      }
    });
    const strength = calculatePasswordStrength(psw);
    setState({
      ...state,
      [name]: value === "on" ? checked : value,
      password: psw,
      strength
    });
  }
  useEffect(() => {
    const psw = generateRandomPassword({
      options: {
        numbers: state.numbers,
        symbols: state.symbols,
        uppercase: state.uppercase,
        lowercase: state.lowercase,
        excludeSimilarCharacters: false,
        excludeAmbiguousCharacters: false
      }
    });
    const strength = calculatePasswordStrength(psw);
    console.log("INITIAL ", psw, strength);
    setState({ ...state, password: psw, strength });
  }, []);
  function copyToClipboard() {
    navigator.clipboard.writeText(state.password);
  }
  const perks = [
    "Enhanced Security.",
    "Reduced Risk of Hacking.",
    "Data Confidentiality.",
    "Peace of Mind."
  ];
  return /* @__PURE__ */ jsx(
    "form",
    {
      className: "lg:mx-auto my-10 max-w-7xl px-6 lg:px-8",
      onSubmit: submit,
      onChange,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-none rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-[1400px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-8 sm:p-10 lg:flex-1 lg:max-w-[500px]", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold tracking-tight text-gray-100", children: "Password Generator" }),
          /* @__PURE__ */ jsx(
            "ul",
            {
              role: "list",
              className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-500 sm:grid-cols-2 sm:gap-6",
              children: perks.map((perk, key) => {
                return /* @__PURE__ */ jsxs("li", { className: "flex gap-x-3", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "h-6 w-5 flex-none text-indigo-600",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  perk
                ] }, key);
              })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-x-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "flex-none text-sm font-semibold leading-6 text-indigo-600", children: "Options" }),
            /* @__PURE__ */ jsx("div", { className: "h-px flex-auto bg-gray-100" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 mt-5", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                label: "Numbers",
                name: "numbers",
                description: "Including numerical digits in the password.",
                checked: state.numbers
              }
            ),
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                label: "Symbols",
                name: "symbols",
                description: "Including numerical digits in the password.",
                checked: state.symbols
              }
            ),
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                label: "Uppercase",
                name: "uppercase",
                description: "Using capital letters in the password.",
                checked: state.uppercase
              }
            ),
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                label: "Lowercase",
                name: "lowercase",
                description: "Utilizing lowercase letters in the password.",
                checked: state.lowercase
              }
            ),
            /* @__PURE__ */ jsx(Slider, { name: "slider-thumb", label: "Password Length", minValue: 12 })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: classNames(
              "flex flex-1 -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-2xl lg:flex-shrink-0"
            ),
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: classNames(
                  "flex flex-1 rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:min-w-[516px]",
                  isAllDisabled && "bg-pink-100 ring-pink-200/50"
                ),
                children: [
                  isAllDisabled && /* @__PURE__ */ jsx("div", { className: "mx-auto px-8", children: /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-gray-600", children: "Please select at least one option" }) }),
                  !isAllDisabled && /* @__PURE__ */ jsxs("div", { className: "mx-auto px-8", children: [
                    /* @__PURE__ */ jsxs("p", { className: "text-base font-semibold text-gray-600", children: [
                      "Your password is",
                      /* @__PURE__ */ jsx("span", { className: "ml-1 text-indigo-600", children: state.strength })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-2 justify-center", children: [
                      /* @__PURE__ */ jsx("p", { className: "my-8 flex items-baseline justify-center cursor-pointer", children: /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          value: state.password,
                          className: "text-5xl font-bold tracking-tight text-gray-900 text-nowrap w-96 border-none bg-transparent text-center focus:outline-none focus:ring-transparent focus:border-transparent focus:ring-0",
                          readOnly: true
                        }
                      ) }),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "my-auto pt-2 cursor-pointer",
                          onClick: copyToClipboard,
                          children: /* @__PURE__ */ jsx(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              strokeWidth: "1.5",
                              stroke: "currentColor",
                              className: "w-6 h-6 text-gray-900/50 hover:text-pink-600 cursor-pointer transition-all duration-300 ease-in-out",
                              children: /* @__PURE__ */ jsx(
                                "path",
                                {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  d: "M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                                }
                              )
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        label: "Generate new password",
                        type: "submit",
                        class: "w-fit"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Your password will be generated and displayed above." })
                  ] })
                ]
              }
            )
          }
        )
      ] })
    }
  );
};

const $$Astro$1 = createAstro();
const $$HeadBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeadBanner;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-1 flex-col justify-end my-5 sm:mx-24"> <div class="flex flex-col items-center justify-center w-full h-full space-y-5 text-center"> <h1 class="text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">
PassGen Plus: Empowering Your Online Security with Strong Passwords
</h1> <p class="mt-6 text-lg leading-8 text-gray-400">
PassGen Plus simplifies creating strong, unique passwords to protect
      against rising cyber threats, ensuring data security. By generating
      complex passwords for each account, you can fortify their defenses and
      avoid vulnerabilities to potential hacking attempts.
</p> </div> </section>`;
}, "/Users/edancerys/repositories/password-generator/src/components/HeadBanner.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Password Generator" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"> <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div> </div> ${renderComponent($$result2, "HeadBanner", $$HeadBanner, {})} ${renderComponent($$result2, "Card", PasswordGenerator, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Card", "client:component-export": "default" })} ${renderComponent($$result2, "Banner", $$Banner, {})} ` })}`;
}, "/Users/edancerys/repositories/password-generator/src/pages/index.astro", void 0);

const $$file = "/Users/edancerys/repositories/password-generator/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, index as i };
