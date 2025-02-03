import { loadStripe } from '@stripe/stripe-js'; 

const stripePromise = loadStripe(
    'pk_test_51Qifh1CGBqJSY6YMqs6glkJwmS1k7LBWaeQOBxYHJbj62LP3wBJmp05OPJcNlmbLKuZDo47VRBk8r0sy7geJupCd003XkJyGGY');

    export default stripePromise;