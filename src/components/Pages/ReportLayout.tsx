import { useRef } from "react";
import { ConfigProvider, theme, Switch, Layout, Flex, Tooltip } from "antd";
import { FloatButton } from 'antd';
import { Outlet, useSearchParams } from "react-router-dom";
import { MoonOutlined, SunOutlined, BulbOutlined, FilePdfOutlined } from '@ant-design/icons';

import { header_color_dark, header_color_light } from "../../data/themeValues";
import MainNav from "../MainNav";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const { Header, Content, Footer } = Layout;

function ReportLayout()
{
    const [searchParams, setSearchParams] = useSearchParams();
    const isDarkMode: boolean = searchParams.get('darkmode') === 'true';

    const { defaultAlgorithm, darkAlgorithm } = theme;

    const handleClick = (value: boolean) =>
    {
        setSearchParams({
            darkmode: value.toString()
        })
        // setIsDarkMode(value);
    };
    
    const handleSwitch = () =>
    {
        // setIsDarkMode((previousValue) => !previousValue);
        setSearchParams({
            darkmode: (!isDarkMode).toString()
        })
    }

    const componentRef = useRef<HTMLElement | null>(null);

    const handleDownloadPDF = () =>
    {
        const input = componentRef.current as HTMLDivElement | null;

        if (!input)
        {
            console.error("Component to print is not available");
            return;
        }

        // Using class name seems to not always work. Need to add this little workaround.
        // Select elements to exclude
        const elementsToExclude = input.querySelectorAll<HTMLElement>(".exclude-from-pdf") as NodeListOf<HTMLElement>;;

        // Store the elements temporarily
        const removedElements: { parent: Node; element: HTMLElement }[] = [];
        elementsToExclude.forEach(element =>
        {
            if (element.parentNode)
            {
                removedElements.push(
                {
                    parent: element.parentNode,
                    element: element,
                });
                element.parentNode.removeChild(element);
            }
        });
        html2canvas(input).then((canvas) =>
        {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");

            // The correct addImage function parameters
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("download.pdf");
            removedElements.forEach(({ parent, element }) => 
            {
                parent.appendChild(element);
            });
        });
    }
    // const handlePrint = useReactToPrint(
    // {
    //     content: () => componentRef.current,
    // });

    return (
    <ConfigProvider
        theme={
        {
            algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
    >
    <div ref={componentRef as React.RefObject<HTMLDivElement>}>
    <Layout
        style={
        {
            // height: '100%',
            height: '100vh',
            margin: '0px',
            padding: '0px',
            overflow: "scroll",
        }}
    >
        <Header
            style={{
                backgroundColor: isDarkMode ? header_color_dark : header_color_light,
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Flex
                style={
                {
                    width: "100%"
                }}
                align="center"
                justify="space-between"
            >
                <MainNav/>
                <Switch
                    className="exclude-from-pdf"
                    onChange={handleSwitch}
                    checkedChildren={<MoonOutlined />}
                    unCheckedChildren={<SunOutlined />}
                />
            </Flex>
        </Header>
        <Content
            style={
            {
                // height: '100%',
                // height: '100vh',
                width: "100%",
                padding: "0 15px",
            }}
        >

            <Outlet/>
            <div
                className="exclude-from-pdf"
            >
                <FloatButton.Group
                    trigger="hover"
                    icon={<BulbOutlined />}
                >
                    <Tooltip placement="left" title="Download Page as PDF.">
                        <FloatButton
                            onClick={handleDownloadPDF}
                            icon={<FilePdfOutlined />}
                        />
                    </Tooltip>
                    {/* <Tooltip placement="left" title="Print Page.">
                        <FloatButton
                            onClick={handlePrint}
                            icon={<PrinterOutlined />}
                        />
                    </Tooltip> */}
                    <FloatButton
                        onClick={() => handleClick(false)}
                        icon={<SunOutlined />}
                    />
                    <FloatButton
                        onClick={() => handleClick(true)}
                        icon={<MoonOutlined />}
                    />
                </FloatButton.Group>
            </div>
        </Content>
        <Footer style={{ textAlign: 'left' }}>
            ©{new Date().getFullYear()} DCOR, MIMT
        </Footer>
    </Layout>
    </div>
    </ConfigProvider>
    )
}

export default ReportLayout