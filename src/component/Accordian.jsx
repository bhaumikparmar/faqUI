import React, { useEffect, useState } from 'react'
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const faqData =
    [{

        id: "esim-what",
        title: "What is an eSIM?",
        content:
            "An eSIM (embedded SIM) is a digital SIM card built directly into your device. It allows you to activate cellular plans digitally without needing a physical SIM card.",
    },
    {
        id: "esim-devices",
        title: "Which devices support eSIM?",
        content:
            "Many modern smartphones support eSIM, including recent iPhone models (iPhone XS and newer), Google Pixel phones, Samsung Galaxy devices, and select iPads.",
    },
    {
        id: "esim-dual",
        title: "Can I use both eSIM and physical SIM simultaneously?",
        content:
            "Yes, most eSIM-compatible devices support Dual SIM functionality, allowing you to use both an eSIM and a physical SIM card at the same time.",
    },
    {
        id: "esim-activation",
        title: "How do I activate an eSIM?",
        content:
            "To activate an eSIM, you typically scan a QR code provided by your carrier or enter the activation details manually in your device settings.",
    },
    {
        id: "esim-benefits",
        title: "What are the advantages of using an eSIM?",
        content:
            "eSIMs offer several benefits: easy switching between carriers, no physical SIM card needed, ability to store multiple profiles, and environmentally friendly."
    }]

const Accordian = () => {
    const [id, setId] = useState(null)

    const handleShow = (faqId) => {
        if(id === faqId){
            setId(null)
        }else{
            setId(faqId)
        }
    }

    return (
        <div style={{ marginTop: '50px' }}>
            {
                faqData.map((faq, index) => (
                    <>
                        <div key={faq.id} className='faq-contains'>
                            <div className='faq-title'>
                                <p>{faq.title}</p>
                                <button onClick={() => handleShow(faq.id)}>
                                    {faq.id === id ? <FaChevronDown /> : <FaChevronRight />}
                                </button>
                            </div>
                        </div>
                        {faq.id === id &&
                            <div className='faq-content'>
                                <div style={{ textAlign: 'left' }}>
                                    <p>{faq.content}</p>
                                </div>
                            </div>
                        }
                    </>
                ))
            }

        </div >
    )
}

export default Accordian