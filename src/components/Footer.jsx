import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
    return (
        <footer className="py-5 sm:px-10 px-5">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray text-xs">
                        More ways to shop: {' '}
                        <span className="underline text-blue">
                            Find an Apple Store {' '}
                        </span>
                        or {' '}
                        <span className="underline text-blue">
                            other retailer
                        </span>{' '}
                        near you.
                    </p>
                    <p className="font-semibold text-gray text-xs">
                        Or call 000800-040-1966
                    </p>
                </div>

                <div className="bg-neutral-700 my-5 h-[1px] w-full" />

                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc.-Suvam All rights reserved.</p>
                    <div className="flex">
                        {footerLinks.map((link, i) => (
                            <p key={link} className="font-semibold text-gray text-xs">
                                {link}{' '}
                                {i !== footerLinks.length - 1 && (
                                    <span className="mx-2"> | </span>
                                )}
                            </p>
                        ))}
                    </div>
                    <a
                        href="https://www.linkedin.com/in/suvam-mohapatra-604486311/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: 'none',
                            display: 'inline-block',
                            backgroundColor: '#0077b5', // LinkedIn blue color
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontSize: '16px'
                        }}
                    >
                        My LinkedIN Site
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer