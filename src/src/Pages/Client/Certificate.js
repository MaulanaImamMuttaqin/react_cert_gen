import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { motion } from "framer-motion"

const inputVariant = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeInOut",
            delay: 0.3
        }
    },
    exit: {
        y: -50,
        opacity: 0,
        transition: {
            ease: "easeInOut"
        }
    }
}


export const InputCertificateId = () => {
    const [CertID, setId] = useState("");

    const history = useHistory()

    const Submit = (id) => {
        history.push(`/Certificate/${id}`)
        console.log(id)
    }
    return <motion.div
        variants={inputVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex-col center  h-screen gap-5 overflow-hidden"
    >
        <div className="flex gap-2">
            <input value={CertID} onChange={e => setId(e.target.value)} type="number" className="w-62 h-10 border border-gray-500 outline-none rounded-full pl-5" placeholder="Certificate ID" />
            <button onClick={() => Submit(CertID)} className="h-10 px-5 rounded-full button-style ">Enter</button>
        </div>
        <div id="message" className="text-gray-900 font-semibold text-center">
            <p>If you don't have the Certificate Id, Please Contact Your Certificate Provider,</p>
            <p>or</p>
            <p>be the <a href="#provider" className="text-blue-700" >Provider</a></p>
        </div>
    </motion.div>
}

export const InputValidation = () => {
    const [states, setStates] = useState({
        name: "",
        verifying: false,
        verified: false,
        status: false,
        message: ""
    });

    const { id } = useParams()


    const Submit = (name) => {
        setStates({
            ...states,
            verifying: true
        })
        setTimeout(() => {
            setStates({
                ...states,
                verifying: false,
                verified: true,
                status: false,
                message: "nama anda tidak terdaftar tolong periksa kembali nama anda "
            })
        }, 2000)
        console.log(name)
    }

    return <motion.div
        variants={inputVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex-col center  h-screen overflow-hidden"
    >
        <p>{id}</p>
        <div className="gap-2 flex-col center">
            <div className="flex gap-2">
                <input value={states.name} onChange={e => setStates({ ...states, name: e.target.value })} type="text" className="w-96 h-10 border border-gray-500 outline-none rounded-full pl-5" placeholder="Enter Your Name; ex : Ananda Putra Sangiang" />
                <button onClick={() => Submit(states.name)} className="h-10 px-5 rounded-full button-style ">Validate</button>
            </div>
            {states.verified && <p>{states.message}{states.status && <a href="#disini" className="text-blue-800"> disini</a>}</p>}
            {states.verifying && <p>Verifying...</p>}
        </div>
    </motion.div>
}

