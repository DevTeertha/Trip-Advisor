import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {

    const [success, setSuccess] = useState(false);

    const data = [
        {
            name: 'Unique Cob Cottage',
            price: 128
        }
    ]

    const onToken = (token) => {
        console.log(token);
        setSuccess(true);
    }

    return (
        <div className='App mt-5'>
            <StripeCheckout
                token={onToken}
                stripeKey="pk_test_51Ie2NsBLx6AtoZTQNHIhxGylq1l0ZsT44qSVhFAbCDyptm6LlyvVW9eMyH7TjzgmsjjooTb1VwkmFjcXW7OAzYGY00b9V8ZKnA"
                billingAddress
                shippingAddress
                amount={data[0].price * 100}
                name={data[0].name}
            />
            {success && <h5 className="mt-3" style={{color: 'green'}}>Payment Successfully Completed!!</h5>}
        </div>
    );
};

export default Payment;