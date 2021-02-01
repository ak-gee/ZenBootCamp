import React,{useState, useEffect} from 'react';
// import {Data} from '.components/Data.js';
import {Pagination} from './components/pagination.js';
import './style.css';


export const Pagination_App = () =>{

  return(
    <div>My Pagination</div>
  )
}

export const Appticket = () =>{

    const [posts,setPosts] =React.useState([])
    const [load,setLoad] = React.useState(false)
    const [currPage,setCurrPage] = React.useState(1) 
    const [perPage] = React.useState(5)



    var [ticket,setTicket] = React.useState({id:"",desc:"",status:"",priority:''})
    var [table,setTable] = React.useState([{id:"",desc:"",status:"",priority:''}])
    var [enter,setEnter] = React.useState("")
    var [deleteid,setDelete] = React.useState("")
    var [read,setRead] =React.useState({})

    const TabHead = ({value}) => <th>{value}</th>
    const TabBody = ({value}) => <td>{value}</td>
    const TabRow = ({ value }) => (
        <tr>
          <td> {value.id}</td>
          <td> {value.desc}</td>
          <td> {value.status}</td>
          <td> {value.priority}</td>
        </tr>
      );
  
    const getTicket = () => {
        
          fetch("http://localhost:3000/posts/"+enter)
            .then(res => res.json())
            .then(result => {
           
                setRead( read = result)
                // console.log(read);
                // <TableDisplay />
               
            }   
            )
            .catch(error => {
                console.log(error)});
        };

        const updTicket = () => {
          
        let str= enter.split(',')
     
      
            ticket.id = str[0];
            ticket.desc = str[1];ticket.status = str[2];ticket.priority = str[3];
     
            setTicket(ticket)
            fetch("http://localhost:3000/posts/"+str[0], {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json; charset=UTF-8 "  },
                  body: JSON.stringify(ticket)
                          })
              .then(res => res.json())
              .then(result => {          
               setRead( read = result)
                   
              }   
              )
              .catch(error => {
                  console.log(error)});
          };

          const delTicket = () => {
           
            fetch("http://localhost:3000/posts/"+deleteid,{
            method: "DELETE",
            headers: {
                'Content-type': 'application/json', // Indicates the content ; charset=UTF-8
               },
        })
          .then(res => res.json())         
          .then(result => {
             
                 setDelete(deleteid="")
                
                //  console.log(table,enter)
                // getTable()
                 
              }   
              )
              .catch(error => {
                  console.log(error)});
          };
     
          const newTicket = () => {
            let str= enter.split(',')     
         
                ticket.id = str[0];
                ticket.desc = str[1];ticket.status = str[2];ticket.priority = str[3];
                setTicket(ticket)
       
                fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(ticket)
             
              }).then( {
                setTicket( ticket = enter)
                   { 
                    //    console.log(ticket.id,ticket.desc);
                    // console.log(JSON.stringify(enter));
                    }
         
                  })
                
                .catch(error => {
                console.log(error)});
            }; 
   
    const getTable = () => {
        fetch("http://localhost:3000/posts")
            .then(res => res.json())
            .then(result => {

                setTable( table = result)
                console.log(table[4].desc,table.length);
                        
                 }
            )
            
            .catch(error => {
                console.log(error)});
        };
     
        

        const   TableDisplay = () => (
     /*Displays single ticket read by clicking Read Ticket Button */
            <div className="container-fluid">
            <table  className="table table-hover text-dark table-active table-bordered">  
            <thead>
            <tr>
              <TabHead value ="Ticket ID" />
              <TabHead value ="Description" />     
              <TabHead value ="Status" />  
              <TabHead value ="Priority" />                   
          
            </tr>
            </thead>
            <tbody>
            <TabRow value = {read} />
            </tbody>
            {/* <h4>{read.id} {read.desc} {read.status} {read.priority}</h4> */}
          </table>
          </div>
          
        )
      const display = (table)=> {
          console.log(table[0],table[1],table[2],table[3],table[4]);
          if (table.length > 1){
          return(
            <div className="container-fluid">
          <h1><center>View All Tickets</center></h1>
      
    
            <table  className="table table-hover text-dark table-active table-bordered">  
            <thead>
            <tr>
              <TabHead value ="Ticket ID" />
              <TabHead value ="Description" />     
              <TabHead value ="Status" />  
              <TabHead value ="Priority" />   
                 
          
          </tr>
        </thead>
          
        <tbody>

   
          {table.map(value => (
            <TabRow value = {value} />
     
          ))}

       
          </tbody>
          </table>
          </div>
    
          )
          }
      }

      /*Pagination Code */
  
         /*Change page */
         const paginate = pageNumber => {setCurrPage(pageNumber);
          console.log(currPage)
         }

    const indexOfLastPost = currPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const currPosts = table.slice(indexOfFirstPost,indexOfLastPost);
      console.log(currPosts)
      console.log(table)

 

     
         return(
        <div>
  
                <h3>Ticketing App</h3>
                <button className = "getbutton" onClick = {getTable}>Get All Tickets</button>
                <h2>_________________________________________________________________________________</h2>
                
                {/* {display(table)} Commented to try pagination*/}
                {display(currPosts)}
                <Pagination 
                perPage = {perPage} 
                length = {table.length} 
                paginate = {paginate}/>
                <input className = "enter" type = 'text' value = {enter} placeholder="Enter id to read, Enter id,desc,status,priority for New Ticket/Update Ticket" onChange = {(event) => setEnter(event.target.value)}/>
                <button className = "rdbutton" onClick = {getTicket}>Read Ticket</button>
                <button className = "newbutton" onClick = {newTicket}>New Ticket</button>
                <button className = "updbutton" onClick = {updTicket}>Update Ticket</button>
                <h2>____________________________________________________________________________________</h2>
                <input id = "deltxt" className = "id" type = 'text' placeholder="Enter id to delete" value = {deleteid} onChange = {(event) => setDelete(event.target.value)}/>
                <button className = "delbutton" onClick = {delTicket}>Delete Ticket</button>
                <TableDisplay />
             
              
                
        </div>
    );
}