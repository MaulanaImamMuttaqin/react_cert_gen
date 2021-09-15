import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


const CertList = [
    {
        id: '123456',
        alias: 'Sertifikasi 1',
        date: '12-2-2021',
        status: 'active',
        generated: '12/23',
    },
    {
        id: '123456',
        alias: 'Sertifikasi 1',
        date: '12-2-2021',
        status: 'active',
        generated: '12/23',
    },
    {
        id: '123456',
        alias: 'Sertifikasi 1',
        date: '12-2-2021',
        status: 'active',
        generated: '12/23',
    }
    ,
    {
        id: '123456',
        alias: 'Sertifikasi 1',
        date: '12-2-2021',
        status: 'active',
        generated: '12/23',
    }
    ,
    {
        id: '123456',
        alias: 'Sertifikasi 1',
        date: '12-2-2021',
        status: 'active',
        generated: '12/23',
    }
    ,
    {
        id: '123456',
        alias: 'Sertifikasi 1',
        date: '12-2-2021',
        status: 'active',
        generated: '12/23',
    }


]

function Dashboard() {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu)
    }
    return (
        <div className="w-screen h-screen flex p-3 gradient-dashboard text-gray-300 justify-between overflow-hidden">
            <SideBar openMenu={openMenu} toggleMenu={toggleMenu} />
            <div className={`flex flex-col w-3/4 gap-2 transition-all duration-500 `} style={{ width: openMenu ? '75%' : '93.5%' }}>
                <TopBar />
                <Content />

            </div>

        </div>
    )
}

const SideBar = ({ openMenu, toggleMenu }) => {
    return (
        <div className={`h-full transform transition-all duration-500  overflow-hidden  font-bold`} style={{ width: openMenu ? '23.5%' : '5%', boxShadow: "10px 0 0 #4187f6" }}>
            <div className="flex justify-center flex-col h-full w-full rounded-l-lg overflow-hidden gap-3 gradient-dashboard-content">

                <div id="menu-list " className="mt-10 ml-1 text-xl">
                    <div className="menu-style active"><FontAwesomeIcon icon="home" /><span>Home</span></div>
                    <div className="menu-style "><FontAwesomeIcon icon="users" /><span>Accounts</span></div>
                    <div className="menu-style"><FontAwesomeIcon icon="cogs" /><span>Settings</span></div>
                    <div className="menu-style"><FontAwesomeIcon icon="sign-out-alt" /><span>Log Out</span></div>

                </div>
                <div onClick={() => toggleMenu()} className="flex justify-center text-3xl cursor-pointer"><FontAwesomeIcon icon="chevron-circle-left" /></div>
            </div >

        </div >
    )
}

const TopBar = () => {
    return (
        <div className="h-14 w-full  rounded-lg flex items-center justify-end px-2  gradient-dashboard-content">
            <div className="w-10 h-10 rounded-full  center text-xl"><FontAwesomeIcon icon="user" /></div>
        </div>
    )
}

const Content = () => {
    const [open, setOpen] = useState(true)

    const setOpenState = () => {
        setOpen(!open)
        console.log(open)
    }

    return <div className="flex flex-col h-full gap-2 ">
        <CertificationConfiguration open={open} />
        <CertificationList toggleAdd={setOpenState} open={open} />
    </div>
}

const CertificationConfiguration = ({ open }) => {
    const [form, setForm] = useState({
        alias: "",
        description: "",
        access: {
            status: "",
            image_name: "",
            image: ""
        },
        template: {
            name: "",
            image: ""
        }
    })
    const onSubmitImage = e => {
        if (e.target.files[0]) {

            if (e.target.id === "fileForm-name") {
                let access = {
                    ...form.access,
                    image_name: e.target.files[0].name,
                    image: ''

                }
                setForm({ ...form, access })
            } else {
                let template = {
                    name: e.target.files[0].name,
                    image: ''
                }
                setForm({ ...form, template })
            }



        }
    }

    return <div className={`${open ? 'h-0' : 'h-4/5'} w-full  rounded-lg  gradient-dashboard-content transition-all p-4 overflow-hidden duration-500`}>
        <div id="title" className="h-14 border-b-2 border-grey-300 w-full flex items-center px-4 text-2xl font-semibold justify-between">
            <p>Create Certificate</p>
        </div>
        <div id="body" className="gap-3 w-full flex h-auto">
            <div className="w-1/2 border border-black">
                <div className="flex flex-col mt-3 gap-2">
                    <label htmlFor="name">Title <span className="text-red-500">*</span></label>
                    <input value={form.alias} onChange={e => setForm({ ...form, alias: e.target.value })} id="name" type="text" className="h-10 w-4/5 border border-grey-300 rounded-xl pl-3 text-black font-semibold" placeholder="Set Your Certification Title" />
                </div>
                <div className="flex flex-col mt-3 gap-2">
                    <label htmlFor="name">Description</label>
                    <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} id="name" type="text" className="h-32 w-4/5 border border-grey-300 rounded-xl p-3 text-black font-semibold" placeholder="Tell what your Certification about" />
                </div>
                <div className="flex flex-col mt-3 gap-2">
                    <label htmlFor="name">Accessibility</label>
                    <form>
                        <div className="">
                            <input id="opt1" type="radio" name="accessibility" value="open" onChange={e => setForm({ ...form, access: { ...form.access, status: e.target.value } })} />
                            <label className="ml-3" htmlFor="opt1">Can be receive by anyone with the link or the id</label>
                        </div>
                        <div className="">
                            <input id="opt2" type="radio" name="accessibility" value="restricted" onChange={e => setForm({ ...form, access: { ...form.access, status: e.target.value } })} />
                            <label className="ml-3" htmlFor="opt2">Only a certain people can receive the certificate</label>
                            {
                                (form.access.status === "restricted") &&
                                <div className="ml-5 mt-2">
                                    <label className="inline-block h-10 p-3 rounded-full leading-4 Colors-Blue cursor-pointer" htmlFor="fileForm-name">Submit File Name <span className="ml-3"><FontAwesomeIcon icon="plus" /></span></label>
                                    <input id="fileForm-name" type="file" style={{ width: "0.1px", opacity: 0 }} onChange={onSubmitImage} />
                                    <div className="inline-block  relative ml-5" >
                                        <span className=" text-2xl cursor-pointer" id="question"><FontAwesomeIcon icon="question-circle" /></span>
                                        <span id="hint" className=" absolute inline-block h-20 w-44  -right-44 -top-20 text-xs p-1 bg-gray-900 opacity-0">
                                            Submit .txt file filled with names that are allowed to received the certificate. uses new line for every name
                                        </span>
                                    </div>

                                </div>
                            }

                        </div>
                    </form>
                </div>
            </div>
            <div className="border border-black w-1/2">
                <div className="flex flex-col mt-3 gap-2">
                    <label htmlFor="name">Upload Template <span className="text-red-500">*</span></label>
                    <div className="w-full">
                        <label className="inline-block h-32 w-1/4 p-3 rounded-xl leading-4 border border-gray-200 cursor-pointer center text-6xl text-Colors-Blue" htmlFor="fileForm-template"><span className="ml-3"><FontAwesomeIcon icon="cloud-upload-alt" /></span></label>
                        <input id="fileForm-template" type="file" style={{ width: "0.1px", opacity: 0 }} onChange={onSubmitImage} />
                    </div>
                </div>
            </div>
        </div>
        <button onClick={() => console.log(form)}>click</button>
    </div>
}

const CertificationList = ({ toggleAdd, open }) => {

    return <div className={`${open ? 'h-full' : 'h-1/5'} w-full  rounded-lg  gradient-dashboard-content p-4 transition-all overflow-hidden duration-500`}>
        <div id="title" className="h-14 border-b-2 border-grey-300 w-full flex items-center px-4 text-2xl font-semibold justify-between">
            <p>Certification List</p>
            <button onClick={() => toggleAdd()} className=" p-2 rounded-full w-10 h-10 center text-md hover:shadow-lg transition-shadow"><FontAwesomeIcon icon="plus" /></button>
        </div>
        <div id="list">
            <table className="border-none w-full mt-5">
                <thead>
                    <tr className="border-b-2 border-black">
                        <th>No</th>
                        <th>Id</th>
                        <th>Alias</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Generated</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {CertList.map((cert, index) => <List data={cert} index={index + 1} key={index} />)}

                </tbody>
                {/* <List /> */}
            </table>
        </div>

    </div>
}

const List = ({ data, index }) => {
    const { id, alias, date, status, generated } = data
    return <tr>
        <td>{index}</td>
        <td>{id}</td>
        <td>{alias}</td>
        <td>{date}</td>
        <td>{status}</td>
        <td>{generated}</td>
        <td><FontAwesomeIcon icon="trash" /></td>
    </tr>

}

export default Dashboard
