import React from 'react';

const Home = () => {
    return ( 
        <div className="home">
            <h2 className='white'>We have all your Sole needs!</h2>
            <p className='white'>Continue to either the Dark Page or Light Page to see our selection!</p>
        <center>
        <table>
            <tr>  
                <td> 
                    <center>
                       <img class="img2" src = "/sandSole.jpeg" alt="Sand Sole" ></img>
                    </center>
                    
                </td>
                <td> 
                    <center>
                      <img class="img2" src = "/GreySole.jpg" alt="Gray Sole"></img>
                     
                    </center>
                    
                </td>  
                <td> 
                    <center>
                        <img class="img2" src = "/greenSole.jpeg" alt="Green Sole" ></img>
                    </center>
                       
                </td>
                <td> 
                    <center>
                       <img class="img2" src = "/southernSole.jpeg" alt="Southern Sole" ></img>
                    </center>
                    
                </td>
            </tr>
        
        </table>
    </center>
            

        </div>
     );
}
 
export default Home;