import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Animate = () => {
  const data = [
    {
      animateClass: "animate__bounce",
    },
    {
      animateClass: "animate__flash",
    },
    {
      animateClass: "animate__pulse",
    },
    {
      animateClass: "animate__rubberBand",
    },
    {
      animateClass: "animate__shakeX",
    },
    {
      animateClass: "animate__shakeY",
    },
    {
      animateClass: "animate__headShake",
    },
    {
      animateClass: "animate__swing",
    },
    {
      animateClass: "animate__tada",
    },
    {
      animateClass: "animate__wobble",
    },
    {
      animateClass: "animate__jello",
    },
    {
      animateClass: "animate__heartBeat",
    },
    {
      animateClass: "animate__backInDown",
    },
    {
      animateClass: "animate__backInLeft",
    },
    {
      animateClass: "animate__backInRight",
    },
    {
      animateClass: "animate__backInUp",
    },
    {
      animateClass: "animate__bounceIn",
    },
    {
      animateClass: "animate__bounceInDown",
    },
    {
      animateClass: "animate__bounceInLeft",
    },
    {
      animateClass: "animate__bounceInRight",
    },
    {
      animateClass: "animate__bounceInRight",
    },
    {
      animateClass: "animate__bounceOut",
    },
    {
      animateClass: "animate__bounceOutDown",
    },
    {
      animateClass: "animate__bounceOutLeft",
    },
    {
      animateClass: "animate__bounceOutRight",
    },
    
  ];
  return (
    <>
      <div>
        <div className="py-5 text-center text-2xl font-semibold">Animation</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-5 sm:gap-7 px-10">
          {data.map((item, index) => (
            <Card
              className={`py-4 animate__animated animate__delay-3s  ${item.animateClass}`}
              key={index}
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                {/* <h1
                  className={`text-3xl text-secondary-500 text-center font-semibold animate__animated animate__delay-5s  ${item.animateClass}`}
                >
                  Hello how are you
                </h1> */}
                <h4 className={`font-bold text-large animate__animated animate__delay-5s ${item.animateClass}`}>{item.animateClass}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 flex justify-center">
                <div className="w-full flex justify-center">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl mx-auto"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={200}
                  />
                </div>
              </CardBody>
            </Card>
            // <div key={index}>
            //   <h1 className={`text-3xl text-secondary-500 text-center font-semibold animate__animated animate__delay-2s  ${item.animateClass}`}>Hello how are you</h1>
            //   </div>
          ))}

          {/* {[...Array(15)].map(() => (
          <div>
            <div>Hello</div>
            {[...Array(10)].map((helo, index) => (
              <div>sankit &nbsp;</div>
            ))}
          </div>
        ))} */}
        </div>
      </div>
    </>
  );
};

export default Animate;
