import React from 'react'

const Table = ({tableData}) => {
  return (
    <div>
        <table className='product-table'>
            {tableData.length!==0?
            <thead>  
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>PRICE</th>
                    <th>CATEGORY</th>
                    <th>SOLD</th>
                    <th>IMAGE</th>
                </tr>
            </thead>
            :null}
                
            <tbody>
                {tableData.map((item)=>{
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td>{item.sold?'true':'false'}</td>
                        <td><img width='50px' height='50px' src={item.image} alt='product_img'/></td>
                    </tr>
                })}
            </tbody>
        </table>

        {tableData.length===0? 'no results found, return to previous page or change search':null}
    </div>
  )
}

export default Table