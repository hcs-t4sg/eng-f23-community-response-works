import { useEffect, useState } from 'react';
import ContactForm from './contactForm';
import DataCard from './dataCard';

// Example function to show how an API might behave
async function queryExampleAPI(querystring) {

  // Set some artificial loading time
  // The await keyword pauses execution of an async function until the awaited function resolves
  await new Promise(resolve => setTimeout(resolve, 2000));

  if (querystring === "crisis-response-data") {
    const mockData = [
      { question: 'How many responses did we do this past month?', answer: 'Answer 1' },
      { question: 'How many responses for each "crisis type"?', answer: 'Answer 2' },
      { question: 'How many responses for each tag?', answer: 'Answer 3' },
      { question: 'How many responses by location??', answer: 'Answer 4' },
      { question: 'How many responses by time of day?', answer: 'Answer 5' },
    ];

    const response = {
      error: null,
      data: mockData
    }
    return response // An `async` function returns a `Promise` that must be `await`ed inside another `async` function
  }

  // Sometimes APIs will return an error if your query is invalid or there are other issues
  const response = {
    error: new Error("Invalid API response"),
    data: null
  }
  return response
}

function DataDashboard() {
  // Defining a state variable to store the data
  // State variable is initially null, but will update once the API request finishes
  const [dashboardData, setDashboardData] = useState(null);

  // As if data was loading but will replace this with actual API requests
  useEffect(() => {

    // Define async function that calls the API
    const fetchAPIData = async () => {
      // TO-DO: Fetch data from an API endpoint or update it as needed
      const { error, data } = await queryExampleAPI("crisis-response-data"); // Async functions must be awaited
      
      if (error) {
        // Handle errors in API fetching. Ideally error messages should be displayed in the frontend UI, not just console.logged. Fine for development though
        console.log(error.message)
        return
      }

      setDashboardData(data);
      return
    };

    // Run the async function
    fetchAPIData();

  }, []); // Make sure to include the dependency array in useEffect, or your app will infinite loop

  const dashboard = dashboardData ? dashboardData.map((item, index) => (
   <div key={index}>
      <div /* className="grid-item" */ style={{ gridColumn: (index % 3) + 1, gridRow: 1}}>
        {DataCard(item.question, "", item.answer)}
      </div>
    </div>
  )) : "Loading..."
  //{DataCard(item.question, "", item.answer)}
  // <strong>{item.question}:</strong> {item.answer}
  return (
    <div height="auto" overflow="auto" onScroll={true}>
      <h2 style={{paddingTop: '10%'}}>Data Dashboard</h2>
      <div className="grid-container">
      {dashboard}
      </div>
     
       {/*<ContactForm/>*/}

    </div>
  );
}

export default DataDashboard;