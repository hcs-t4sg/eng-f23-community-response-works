// FeedbackForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Card, Box } from '@radix-ui/themes';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState(null);

  const handleFeedback = async (e) => {
    e.preventDefault();

    const feedbackRequest = localStorage.getItem('feedbackRequest') ?? [];
    const username = localStorage.getItem('username');

    if (feedback) {
      feedbackRequest.push({username: username, feedback: feedback});
      localStorage.setItem('feedbackRequest', feedbackRequest);
      // Redirect to the data dashboard
      window.location.href = '/dataDashboard';
    } else {
      // Mock authentication failed, produce an error message
      setError('Cannot submit empty feedback');
    }
  }

  return (
    <Card style={{
      position: "relative",
      background: "linear-gradient(to right, #646cff, white, #646cff)",
      border: 0,
      borderRadius: 10,
      padding: "3px",
      animation: "background-pan 3s linear infinite",
    }}>
      <Card size="5" style={{ 
        width: 450, 
        padding: 50,
        border: 0,
        background: "#242424",
        }}>
        <Flex direction={'column'} align={'center'}>
          <h1 style={{fontSize: "2em"}}>Feedback Form</h1>

          {error && <p>{error}</p>}

          <form onSubmit={handleFeedback}>
            <Flex direction={'column'} align="center">
              <Box>
                <h4 style={{marginBottom: 0}}>Feedback</h4>
                <textarea
                  type="feedback"
                  placeholder="Enter feedback here..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  style={{ padding: 10, width: 350, height: 150, borderRadius: 10, border: "1px solid white", resize: "none" }}
                />
              </Box>
              <Flex style={{marginTop: 20, width: "100%" }} justify="space-between">
                <Link to="/dataDashboard">
                  <button>
                    <svg 
                      width="12" 
                      height="12" 
                      viewBox="0 0 15 15" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z" 
                        fill="currentColor" 
                        fillRule="evenodd" 
                        clipRule="evenodd">
                      </path>
                    </svg> Back
                  </button>
                </Link>

                <button type="submit">Submit Feedback</button>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Card>
    </Card>
  );
}

export default FeedbackForm;
