import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = "919876543210"; // Aapka WhatsApp number
    const message = "Hello! I want to contact you.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
                fixed
                bottom-[12rem]
                right-4
                bg-green-500
                text-white
                rounded-full
                w-14
                h-14
                flex
                items-center
                justify-center
                shadow-lg
                hover:bg-green-600
                transition
                duration-300
            "
            aria-label="Chat on WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-8 h-8"
                fill="currentColor"
            >
                <path d="M16 0C7.164 0 0 7.164 0 16c0 2.834.736 5.616 2.139 8.063L.051 32l8.165-2.089A15.895 15.895 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.455c-2.536 0-5.027-.662-7.182-1.911l-.513-.291-4.879 1.246 1.307-4.738-.33-.542C3.045 21.276 2.545 18.649 2.545 16 2.545 8.491 8.491 2.545 16 2.545S29.455 8.491 29.455 16 23.509 29.455 16 29.455zm7.423-9.509l-2.017-.956c-.271-.128-.585-.085-.798.113l-.696.68c-.209.203-.538.262-.817.145a11.453 11.453 0 0 1-5.226-5.226c-.118-.279-.058-.608.145-.817l.68-.696c.201-.209.242-.521.113-.798l-.956-2.017a.619.619 0 0 0-.738-.33c-.604.199-1.345.621-2.088 1.163-.84.625-1.381 1.397-1.69 2.21-.292.776-.409 1.918.484 3.263a15.234 15.234 0 0 0 3.146 3.834 15.234 15.234 0 0 0 3.834 3.146c1.345.893 2.487.776 3.263.484.813-.309 1.585-.85 2.21-1.69.542-.743.964-1.484 1.163-2.088a.619.619 0 0 0-.33-.738z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
