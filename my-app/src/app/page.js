"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import spy_image from "@/assets/profile2.JPG";
import TimeDisplay from "@/components/time_display.jsx";

export default function Home() {
  return (
      <div className="container mx-auto px-4 py-5 max-w-5xl">
      {/* Header Section */}
      {/* <header className="mb-12">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-2">Spy スパイ สปาย</h1>
          </div>
          
          <div className="flex space-x-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Instagram className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Facebook className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </header> */}

      {/* Profile Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="rounded-md overflow-hidden">
              <Image
                src= {spy_image} 
                alt="Profile Image"
                width={400}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
          
          <div className="col-span-2">
            <h2 className="text-3xl font-semibold mb-6 "><TimeDisplay /></h2>
            
            <div className="space-y-4">
              <p className="text-lg">My name is Phattrada Mikota <b>( Spy )</b>.</p>
              <p className="text-lg">Im a software engineering student at Thammasat university.</p>
              <p className="text-lg">Im a GDSC Alumni.</p>
              <p className="text-lg">Im a little girl who passionate with software and data.</p>
              <ol className="items-center sm:flex pt-3">
              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-neutral-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg className="w-2.5 h-2.5 text-slate-50 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 h-full">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Analyst Intern</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Lotus&apos;s</time>
                    {/* <li className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <p className="">- Power BI</p>
                      <p>- Azure Databricks</p>
                      <p>- Power Automate</p>
                      <p>- Excel</p>
                      <p>- Retail Business Knowledge</p>
                  </li> */}
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-neutral-600 rounded-full ring-0 ring-white dark:bg-neutral-900 sm:ring-8 dark:ring-neutral-900 shrink-0">
                    <svg className="w-2.5 h-2.5 text-slate-50 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 h-full">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Scientist Intern</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">AI Gen</time>
                  {/* <li className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <p>- Python for data science</p>
                      <p>- Machine Learning</p>
                      <p>- Prompt Engineer</p>
                      <p>- Insurance Business Knowledge</p>
                  </li> */}
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-neutral-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg className="w-2.5 h-2.5 text-slate-50 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 h-full">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Engineer Intern</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">TMBThanachart Bank</time>
                  {/* <li className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <p>- Azure</p>
                      <p>- Data Engineering</p>
                      <p>- Data Structure</p>
                      <p>- Finance Business Knowledge</p>
                  </li> */}
                </div>
              </li>
            </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Know Me More Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Know me more</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="flex items-center justify-center p-6">
              <h3 className="text-xl font-medium">Books</h3>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="flex items-center justify-center p-6">
              <h3 className="text-xl font-medium">Films</h3>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="flex items-center justify-center p-6">
              <h3 className="text-xl font-medium">Events</h3>
            </CardContent>
          </Card>
          <Link href="/projects">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="flex items-center justify-center p-6">
              <h3 className="text-xl font-medium">Projects</h3>
            </CardContent>
            </Card>
          </Link>
        </div>
      </section>
      </div>
  );
}