import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { bg_color_dark, bg_color_light, border_dark, border_light } from '../../data/themeValues';
import { useSearchParams } from 'react-router-dom';

// Define the data type
interface DataType
{
  key: string;
  ImpactStatus: string;
  LineOfBusiness: string;
  Appcode: string;
  AppName: string;
  BusinessCriticality: string;
  CrownJewel: string;
  LifecycleStage: string;
  AppCoord: string;
  ITCustodian: string;
  GroupManager: string;
  ITExecutive: string;
}

// Sample data
const data: DataType[] = [
{
    key: '1',
    ImpactStatus: 'Recovered',
    LineOfBusiness: 'CM',
    Appcode: 'ZVX0',
    AppName: 'ALTERNATIVE ASSETS INTERNET WEBSITES',
    BusinessCriticality: 'High',
    CrownJewel: 'No',
    LifecycleStage: 'Production',
    AppCoord: 'Badam, Srirangam',
    ITCustodian: 'McNab, Chris',
    GroupManager: 'Iakovenko, Viktor',
    ITExecutive: 'Sehgal, Anurag',
},
{
    key: '2',
    ImpactStatus: 'Recovered',
    LineOfBusiness: 'CM',
    Appcode: 'VGG0',
    AppName: 'CM Access Controls System (CMACS)',
    BusinessCriticality: 'High',
    CrownJewel: 'No',
    LifecycleStage: 'Production',
    AppCoord: 'Shillinglaw, Chris',
    ITCustodian: 'Pandya, Palak D',
    GroupManager: 'Vassilakis, Thanos',
    ITExecutive: 'Modha, Gunjan',
},
{
    key: '3',
    ImpactStatus: 'Recovered',
    LineOfBusiness: 'CM',
    Appcode: 'WDU0',
    AppName: 'FIC MUNIS - DECISION SUPPORT SYSTEMS',
    BusinessCriticality: 'High',
    CrownJewel: 'No',
    LifecycleStage: 'Production',
    AppCoord: 'Rathan, Jay',
    ITCustodian: 'Singh, Imreet',
    GroupManager: 'Shah, Nirav',
    ITExecutive: 'Owens, Matthew',
},
];

const columns: ColumnsType<DataType> = [
{
    title: 'ImpactStatus',
    dataIndex: 'ImpactStatus',
    key: 'ImpactStatus',
},
{
    title: 'Line of Business',
    dataIndex: 'LineOfBusiness',
    key: 'LineOfBusiness',
},
{
    title: 'Appcode',
    dataIndex: 'Appcode',
    key: 'Appcode',
},
{
    title: 'AppName',
    dataIndex: 'AppName',
    key: 'AppName',
},
{
    title: 'BusinessCriticality',
    dataIndex: 'BusinessCriticality',
    key: 'BusinessCriticality',
},
{
    title: 'CrownJewel',
    dataIndex: 'CrownJewel',
    key: 'CrownJewel',
},
{
    title: 'Lifecycle Stage',
    dataIndex: 'LifecycleStage',
    key: 'LifecycleStage',
},
{
    title: 'AppCoord',
    dataIndex: 'AppCoord',
    key: 'AppCoord',
},
{
    title: 'ITCustodian',
    dataIndex: 'ITCustodian',
    key: 'ITCustodian',
},
{
    title: 'GroupManager',
    dataIndex: 'GroupManager',
    key: 'GroupManager',
},
{
    title: 'ITExecutive',
    dataIndex: 'ITExecutive',
    key: 'ITExecutive',
},
];

function AppsTable({ isDarkMode = false }: {isDarkMode: boolean})
{
    // const [searchParams] = useSearchParams();
    // const isDarkMode: boolean = searchParams.get('darkmode') === 'true';

    return (
    <div
        style={{
            // height: "350px",
            padding: "4px",
            margin: "4px",
            borderRadius: "8px",
            border: isDarkMode ? border_dark : border_light,
            backgroundColor: isDarkMode ? bg_color_dark : bg_color_light,
            color: 'black',
        }}
    >
        
        <Space
            style={
            {
                margin: "4px 0 8px 0",
            }}
        >
            <Button>Add Appcodes</Button>
            <Button>Edit</Button>
            <Button>Delete</Button>
            <Button>Show 50 rows</Button>
            <Button>Select All</Button>
            <Button>Select None</Button>
            <Button>During Outage</Button>
            <Button>Post Outage</Button>
            <Button>Host Failover</Button>
            <Button>Export</Button>
        </Space>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} />
    </div>
    );
};

export default AppsTable;