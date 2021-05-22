import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from '../../Axios'
import { State } from '../../store'
import Table from '../../components/Tables'
import Loading from '../../components/Loading'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

const DepartmentIndex: React.FC = () => {
    const [data, setdata] = React.useState<any>([])
    const [loading, setloading] = React.useState<boolean>(false)
    const [failed, setfailed] = React.useState<boolean>(false)
    const history = useHistory();

    const headers: string[] = [
        "ID",
        "Name",
        "Created",
        "Status"
    ]
    const display: any = [
        "_id",
        "name",
        "created",
        "status"

    ]
    const user: string | null = useSelector((state: State) => state.user)
    const getData = async () => {
        setloading(true)
        setfailed(false)
        await axios.get('/department', {
            headers: {
                Authorization: "Bearer" + " " + user
            }
        }).then(res => {
            let depart = res.data.data
            setdata(depart)
        }).catch(res => {
            setfailed(false)
            console.log(res)
        })
        setloading(false)
    }
    const goCreate = () => {
        history.push('/departmentcreate')
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => goCreate()}>Primary</Button>
            {
                loading ?
                    <Loading isLoading={loading} isFailed={failed} />
                    : <Table headers={headers} data={data} display={display} />
            }
        </div>
    )
}

export default DepartmentIndex
