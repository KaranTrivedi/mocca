import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { bg_color_dark, bg_color_light, border_dark, border_light } from '../../data/themeValues';

import Frame from '../Frame';
import {
    ClearOutlined,
    DeleteOutlined,
    EditOutlined,
    ExportOutlined,
    MailOutlined,
    NodeExpandOutlined,
    PlusOutlined,
    PlusSquareOutlined
} from '@ant-design/icons';

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

    let total = 85

    const rowSelection = 
    {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) =>
        {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (data: DataType) => (
        {
          disabled: data.key === 'Disabled User', // Column configuration not to be checked
          name: data.key,
        }),
    };

    return (
    <div
        style={{
            height: "350px",
            padding: "8px",
            borderRadius: "8px",
            border: isDarkMode ? border_dark : border_light,
            backgroundColor: isDarkMode ? bg_color_dark : bg_color_light,
        }}
    >
        <Frame
            title="Appcodes Table"
            isDarkMode={isDarkMode}
        />
        <Space
            style={
            {
                margin: "8px 0",
            }}
        >
            <Button type="primary"><PlusSquareOutlined />Add Appcodes</Button>
            <Button><EditOutlined />Edit</Button>
            <Button danger><DeleteOutlined />Delete</Button>
            <Button><NodeExpandOutlined />Show 50 rows</Button>
            <Button><PlusOutlined />Select All</Button>
            <Button><ClearOutlined />Select None</Button>
            <Button><MailOutlined />During Outage</Button>
            <Button><MailOutlined />Post Outage</Button>
            <Button><MailOutlined />Host Failover</Button>
            <Button><ExportOutlined />Export</Button>
        </Space>
        <Table
            style={{
                height: "250px",
                overflow: "scroll",
            }}
            columns={columns}
            dataSource={data}
            pagination={{
                current: 1,
                pageSize: 10,
                // total: {total}
            }}
            rowSelection={
            {
                type: "checkbox",
                // ...rowSelection,
            }}
        />
    </div>
    );
};

{/* <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    /> */}

export default AppsTable;