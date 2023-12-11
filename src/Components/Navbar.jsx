import React from 'react'

export default function Navbar() {
  return (
<>
<header className="bg-gray-800">
  <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-white ml-10 font-bold text-2xl" href="/">
         OHSM
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-white transition hover:text-gray-500/75" href="/">Solutions</a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="/">Company </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="/">Pricing</a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="/">Resources </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="/"> Contact Us </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4 mr-10">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md  px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-600 px-5 py-2.5 text-sm font-medium text-white"
              href="/"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
</>
    )
}
