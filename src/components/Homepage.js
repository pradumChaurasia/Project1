import React, { useState } from 'react'
import './HomePage.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Homepage = () => {

  const [pagesButton, setPagesButton] = useState([
    {
      text: "All Pages", check: false, pages: [
        {
          text: "Page 1", check: false
        },
        {
          text: "Page 2", check: false
        },
        {
          text: "Page 3", check: false
        },
        {
          text: "Page 4", check: false
        },
      ]
    },
    {
      text: "All Pages", check: false, pages: [
        {
          text: "Page 1", check: false
        },
        {
          text: "Page 2", check: false
        },
        {
          text: "Page 3", check: false
        },
        {
          text: "Page 4", check: false
        },
      ]
    },
    {
      text: "All Pages", check: false, pages: [
        {
          text: "Page 1", check: false
        },
        {
          text: "Page 2", check: false
        },
        {
          text: "Page 3", check: false
        },
        {
          text: "Page 4", check: false
        },
      ]
    },
    {
      text: "All Pages", check: false, pages: [
        {
          text: "Page 1", check: false
        },
        {
          text: "Page 2", check: false
        },
        {
          text: "Page 3", check: false
        },
        {
          text: "Page 4", check: false
        },
      ]
    },
    {
      text: "All Pages", check: false, pages: [
        {
          text: "Page 1", check: false
        },
        {
          text: "Page 2", check: false
        },
        {
          text: "Page 3", check: false
        },
        {
          text: "Page 4", check: false
        },
      ]
    },
    {
      text: "All Pages", check: false, pages: [
        {
          text: "Page 1", check: false
        },
        {
          text: "Page 2", check: false
        },
        {
          text: "Page 3", check: false
        },
        {
          text: "Page 4", check: false
        },
      ]
    },

  ]);

  const handleChange = (idx) => {
    const updatedPagesButton = pagesButton.map((item, i) => {
      if (i === idx) {
        // return { ...item, check: !item.check }
        const newCheck = !item.check;

        // Update the 'check' state of each page if the main checkbox is toggled
        const updatedPages = item.pages.map(page => ({ ...page, check: newCheck }));

        return { ...item, check: newCheck, pages: updatedPages };
      }
      return item;
    })
    setPagesButton(updatedPagesButton);
  }



  const [showIndex, setShowIndex] = useState(false);

  const handleClick = (idx) => {
    setShowIndex(showIndex === idx ? null : idx)
  }

  // const handleSubmit = () => {
  //  let count =0;
  //  pagesButton.forEach((item)=>(
  //   item.pages.forEach((page)=>{
  //     if(page.check){
  //       count++;
  //     }
  //   })
  //  ))
  //  if(count === pagesButton.reduce((acc,item)=> acc + item.pages.length,0)){
  //   toast.success("All Pages are Checked!")
  //  }
  //  else{
  //   toast.success(`${count} Pages are Checked!`)
  //  }

  // }
  const handleSubmit = (index) => {
    const checkedPages = pagesButton[index].pages.filter(page => page.check).length;
    const totalPages = pagesButton[index].pages.length;
  
    if (checkedPages === totalPages) {
      toast.success('All Pages are checked');
    } else {
      toast.info(`${checkedPages} Pages are checked`);
    }
  }
  

  return (
    <div className="container">
      {
        pagesButton.map((item, index) => {
          return (
            <>
              <div className="wrapper" key={index}>
                <div style={{ display: 'flex', alignItems: 'center', width: '80%', justifyContent: 'space-between', marginBottom: '20px' }} onClick={() => handleClick(index)}>
                  <div onClick={() => handleClick(index)} style={{cursor:'pointer'}}>{item.text}</div>
                  <div>
                    <input className='button' type='checkbox' checked={item.check} onChange={() => handleChange(index)} />
                  </div>
                </div>
                {
                  showIndex === index && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '25px', backgroundColor: 'white' }}>
                      <hr className="dropdown-divider" style={{ height: '0.05px', width: '80%', border: '1px solid #F9f9f9' }} />
                      {item.pages.map((page, pIndex) => (
                        <div className='wrapper2' key={pIndex}>
                          <div>{page.text}</div>
                          <div>
                            <input
                              className='button'
                              type='checkbox'
                              checked={page.check}
                              onChange={() => {
                                const updatedPages = item.pages.map((p, pi) => {
                                  if (pi === pIndex) {
                                    return { ...p, check: !p.check };
                                  }
                                  return p;
                                });
                                const allChecked = updatedPages.every(p => p.check);

                                const updatedPagesButton = pagesButton.map((it, itIndex) => {
                                  if (itIndex === index) {
                                    return { ...it, pages: updatedPages, check: allChecked };
                                  }
                                  return it;
                                });

                                setPagesButton(updatedPagesButton);
                              }}
                            />
                          </div>

                        </div>
                      ))}
                      <hr className="dropdown-divider" style={{ height: '0.05px', width: '80%', border: '1px solid #F9f9f9' }} />

                      <button className='submit-btn' onClick={()=>handleSubmit(index)}>
                        Done
                      </button>
                    </div>
                  )
                }
              </div>



            </>
          )
        })
      }
      <ToastContainer />
    </div>
  )
}

export default Homepage
