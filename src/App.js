import { useState,useEffect } from 'react';
import style from './App.module.css';
import Layout from './Components/Layout';

function App() {



  const [Bill,setBill] = useState(0);

  const [TipPercent,setTipPercent] = useState(0);

  const [NumOfPeople,setNumOfPeople] = useState(0);

  const [TipAmountPerPeople,setTipAmountPerPeople] = useState(0);
  const [TotalAmountPerPeople,setTotalAmountPerPeople] = useState(0);


  useEffect(() => {
    Calculate();
  },[TipPercent,NumOfPeople])


  function Calculate(){
    let totalPerPeople = (Bill / NumOfPeople).toFixed(2);
    document.getElementById('total-per-people-text').innerHTML = `$${totalPerPeople}`;
    setTotalAmountPerPeople(totalPerPeople);

    let totaltipamount = ((Bill * (TipPercent / 100)) / NumOfPeople).toFixed(2);
    document.getElementById('tip-amount-per-people-text').innerHTML = `$${totaltipamount}`;
    setTipAmountPerPeople(totaltipamount);

  }





  function handleReset(e){
    e.preventDefault();
    console.log();
    setBill(0);
    setNumOfPeople(0);
    setTipAmountPerPeople(0);
    setTotalAmountPerPeople(0);
    document.getElementById('tip-amount-per-people-text').innerHTML = "$0";
    document.getElementById('total-per-people-text').innerHTML = "$0";
    document.getElementById('bill-input').value = 0;
    document.getElementById('num-of-people-input').value = 0;
  }


  return (
    <Layout>
      <div className={style.inner_section}>
        <div className={style.left_section}>

          <div className={style.bill_input_section}>
            <label>Bill</label>
            <input onChange={e => {setBill(e.target.value)}} id='bill-input' type="number" placeholder='0' />
          </div>

          <div className={style.tip_selection_section}>
            <span>Select Tip %</span>
            <div>
              <button onClick={e => {setTipPercent(5)}}>5%</button>
              <button onClick={e => {setTipPercent(10)}}>10%</button>
              <button onClick={e => {setTipPercent(15)}}>15%</button>
              <button onClick={e => {setTipPercent(25)}}>25%</button>
              <button onClick={e => {setTipPercent(50)}}>50%</button>
              <input onClick={e => {setTipPercent(e.target.value)}} type="number" placeholder='Custom %' />
            </div>

          </div>


          <div className={style.number_of_people_section}>
            <span>Number of People</span>
            <input id='num-of-people-input' onChange={e => {setNumOfPeople(e.target.value)}} type="number" placeholder='0' />
          </div>
          

        </div>
        <div className='text-white bg-primary-cyan-darker p-8 rounded-xl md:mt-0 mt-12 md:w-[25rem] h-full flex flex-col justify-between'>

          <div className='flex items-center justify-between mb-4'>
            <div className='grid'>
              <span>Tip Amount</span>
              <span>/ person</span>
            </div>
            <span id='tip-amount-per-people-text' className='text-4xl'>$0.00</span>
          </div>

          <div className='flex items-center justify-between'>
            <div className='grid'>
              <span>Total</span>
              <span>/ person</span>
            </div>
            <span id='total-per-people-text' className='text-4xl'>$0.00</span>
          </div>

          <button onClick={e => {handleReset(e)}} className=' bg-primary-cyan hover:bg-primary-cyan-gray-light text-primary-cyan-darker text-2xl w-full py-3 mt-12 rounded-md'>RESET</button>
          
        </div>
      </div>
    </Layout>
  );
}

export default App;
