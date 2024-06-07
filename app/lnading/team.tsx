import Link from 'next/link';
import React from 'react';

export default function Team() {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-screen md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-0">
  <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
  <p className="text-lg sm:text-3xl font-bold">Meat our Team</p>
    <p className="text-base text-gray-700 md:text-lg">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>
  <div className="grid gap-10 mx-auto lg:max-w-screen sm:grid-cols-2 lg:grid-cols-4 items-center">
    <div className="flex flex-col items-center">

    </div>
    <div className="flex flex-col items-center">
      <img className="object-cover w-40 h-40 mb-4 rounded-full shadow" src="https://up6.cc/2024/06/171772448777531.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold">Mohamed Ali</p>
        <p className="text-sm text-gray-800">Full-stack Developer</p>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <img className="object-cover w-40 h-40 mb-4 rounded-full shadow" src="https://up6.cc/2024/06/171772528380021.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold">Mohamed Suliman</p>
        <p className="text-sm text-gray-800">Full-stack Developer</p>
      </div>
    </div>
    <div className="flex flex-col items-center">

    </div>
  </div>
</div>
        </div>
    )
}