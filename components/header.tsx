"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { NavItem } from "@/lib/types"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  navItems: NavItem[]
  personal: { name: string }
}

export default function Header({ navItems, personal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${scrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">
            <span className="text-highlight">{personal.name}</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-highlight"
              onClick={(e) => {
                // Handle smooth scrolling for anchor links
                if (item.href.startsWith("#") && window.location.pathname === "/") {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }
              }}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button size="sm" asChild className="bg-highlight hover:bg-highlight/90 text-white">
            <Link
              href="#contact"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  const element = document.querySelector("#contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }
              }}
            >
              Contact Me
            </Link>
          </Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="flex h-16 items-center justify-between px-4">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold">
                  <span className="text-highlight">{personal.name}</span>
                </span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-highlight py-2"
                  onClick={(e) => {
                    if (item.href.startsWith("#") && window.location.pathname === "/") {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      const element = document.querySelector(item.href)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    } else {
                      setIsMenuOpen(false)
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                size="sm"
                asChild
                className="mt-2 bg-highlight hover:bg-highlight/90 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

