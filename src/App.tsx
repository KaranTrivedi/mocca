import './App.css'

import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import ReportLayout from './components/Pages/ReportLayout.tsx'
import IncidentView from './components/Pages/IncidentView/IncidentView.tsx';
import AppcodeView from './components/AppcodeView/AppcodeView.tsx';

let router = createBrowserRouter(
[
    {
        path: '/',
        loader: () => redirect("reports")
    },
    {
        path: 'reports',
        element: <ReportLayout/>,
        children:[
        {
            path: '',
            loader: () => redirect("incidentview")
        },
        {
            path: 'incidentview',
            element: <IncidentView/>,
        },
        {
            path: 'appcodeview',
            element: <AppcodeView/>
        },
        ]
    },
])

function App()
{
    // const
    // {
    //     token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App
