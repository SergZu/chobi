var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},l=e.parcelRequire2415;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in o){var l=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,l.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},e.parcelRequire2415=l);var r=l("Jwehi");new(0,r.default)(".swiper-basket",{modules:[r.Navigation],spaceBetween:15,slidesPerView:"auto"});const s=document.querySelectorAll(".basketItem__deleteBtn"),n=document.querySelector(".js-modal"),d=document.querySelector(".modal-deleteItem");s?.forEach((e=>{e.addEventListener("click",(e=>{n?.classList.add("show"),d?.classList.add("show")}))}));document.querySelectorAll(".js-closeBtn")?.forEach((e=>{e.addEventListener("click",(()=>{n?.classList.remove("show"),d?.classList.remove("show")}))}));