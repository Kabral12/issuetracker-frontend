import { useSelector } from "react-redux"


export default function IssuesDisplay() {
    
    const issues = useSelector(state=>state.issues.data)

    return (
        <table className="w-100">
            <thead className="w-100">
                <tr style={{ backgroundColor: "#dfd9e2", color: "#4c3853" }} >
                    <th className="py-2" style={{ width: "10%", paddingLeft: "16px" }}>id</th>
                    <th className="py-2" style={{ width: "20%", textAlign: "center" }}>title</th>
                    <th className="py-2" style={{ width: "20%", textAlign: "center" }}>screenshot</th>
                    <th className="py-2" style={{ width: "30%", textAlign: "center" }}>description</th>
                    <th className="py-2" style={{ width: "20%", textAlign: "right", paddingRight: "16px" }}>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    issues.length > 0 ?
                    issues.map((issue)=>{
                        return <tr className="py-2" style={{ borderBottom: "1px solid #dccc" }} key={issue.id}>
                            <td className="ps-2" ><p style={{ textAlign: "left", padding: "4px 0" }}>{issue.id}</p></td>
                            <td className="ps-2" ><p style={{ textAlign: "center", padding: "4px 0" }}>{issue.title}</p></td>
                            <td className="text-center"><p style={{ textAlign: "left", padding: "4px 0" }}>{issue.screenshot}</p></td>
                            <td className="text-center"><p style={{ textAlign: "left", padding: "4px 0" }}>{issue.description}</p></td>
                            <td></td>
                        </tr>
                    }):
                    null
                }
            </tbody>
        </table>
    )
}