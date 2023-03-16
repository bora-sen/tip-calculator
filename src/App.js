import { useState } from 'react';
import style from './App.module.css';
import Layout from './Components/Layout';
import { calculateTipPerPerson,calculateTotalPerPerson } from './tipCalculator';

function App() {
  const [Bill,setBill] = useState(0);
  const [tipPercent,setTipPercent] = useState(0);
  const [numOfPeople,setNumOfPeople] = useState(0);

  function handleReset(e){
    e.preventDefault();
    setBill(0);
    setTipPercent(0);
    setNumOfPeople(0);
    document.getElementById('bill-input').value = "";
    document.getElementById('num-of-people-input').value = "";
  }
  
  return (
    <Layout>
      <div className={style.inner_section}>
        <div className={style.left_section}>
          <div className={style.bill_input_section}>
            <label>Bill</label>
            <input onChange={e => setBill(parseInt(e.target.value))} id='bill-input' type="number" placeholder='0' />
          </div>
          <div className={style.tip_selection_section}>
            <span>Select Tip %</span>
            <div>
              <button onClick={e => setTipPercent(5)}>5%</button>
              <button onClick={e => setTipPercent(10)}>10%</button>
              <button onClick={e => setTipPercent(15)}>15%</button>
              <button onClick={e => setTipPercent(25)}>25%</button>
              <button onClick={e => setTipPercent(50)}>50%</button>
              <input onChange={e => setTipPercent(parseInt(e.target.value))} type="number" placeholder='Custom %' />
            </div>
          </div>
          <div className={style.number_of_people_section}>
            <span>Number of People</span>
            <input onChange={e => setNumOfPeople(parseInt(e.target.value))} id='num-of-people-input' type="number" placeholder='0' />
          </div>
        </div>
        <div className='text-white bg-primary-cyan-darker p-8 rounded-xl md:mt-0 mt-12 md:w-[25rem] h-full flex flex-col justify-between'>

          <div className='flex items-center justify-between mb-4'>
            <div className='grid'>
              <span>Tip Amount</span>
              <span>/ person</span>
            </div>
            <span id='tip-amount-per-people-text' className='text-4xl'>{calculateTipPerPerson(Bill,tipPercent,numOfPeople)}</span>
          </div>

          <div className='flex items-center justify-between'>
            <div className='grid'>
              <span>Total</span>
              <span>/ person</span>
            </div>
            <span id='total-per-people-text' className='text-4xl'>{calculateTotalPerPerson(Bill,numOfPeople)}</span>
          </div>

          <button onClick={e => handleReset(e)} className='bg-primary-cyan hover:bg-primary-cyan-gray-light text-primary-cyan-darker text-2xl w-full py-3 mt-20 rounded-md'>RESET</button>
          
        </div>
      </div>
    </Layout>
  );
}

export default App;
