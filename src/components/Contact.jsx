import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Input} from "@nextui-org/input";
import { Button } from "@chakra-ui/react";
import BeatLoader from "react-spinners/BeatLoader";
import { useToast } from '@chakra-ui/react'


 const ContactForm = () => {
    const toast = useToast()
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('React_contact_service', 'template_velou2t', form.current, {
          publicKey: 'Ap9Le-gse0X39VJeh',
        })
        .then(
          () => {
           toast({
            title:"Email Sent.",
            description: "We've sent a email to Logan Bull",
            status: 'success',
            duration: 9000,
            isClosable: true,}) 
          },
          (error) => {
            toast({
              title:"Email Not Sent.",
              description: `Somthing has gone wrong ${error.text}`,
              status: 'error',
              duration: 9000,
              isClosable: true,}) 
          },
        );
    };
  
    return (
      <section className="bg-white dark:bg-gray-900">
         <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <Input isClearable type="text" variant='underlined' label="Name" name="user_name" />        
            <Input isClearable type="email" variant='underlined' name="user_email" label="Email" />        
            <Input isClearable type="text" variant='underlined' name="message" label="Message" />
          </div>
          <div >
            <Button                
              colorScheme='blue'
              spinner={<BeatLoader size={8} color='white' />}
              type="submit"                
              >Send</Button>
            </div>        
        </form>
        </div>
      </section>
    );
};

export default ContactForm;