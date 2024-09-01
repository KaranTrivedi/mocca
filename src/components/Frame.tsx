import { Divider } from "antd"

function Frame({ isDarkMode, title }: {isDarkMode: boolean, title: string})
{
    return (
        <div
            style={{
                color: isDarkMode ? 'white' : 'black',
            }}
        >
            <h3
                style={{
                    margin: "8px"
                }}
            >
                {title}
            </h3>
            <Divider
                style={{
                    margin: "0px"
                }}
            />
        </div>
    )
}

export default Frame