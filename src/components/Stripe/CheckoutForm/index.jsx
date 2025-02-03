import {
  PaymentElement,
  useStripe,
  useElements
}
  from "@stripe/react-stripe-js";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../CheckoutForm/styles.css';
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export default function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const {
    state: { dpnCheckerLinck },
  } = useLocation();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stirpe ou Elements com falha, tente novamente')
      return;
    }


    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message);

    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      try {
        

          const products = cartProducts.map((product) => {
            return {
              id: product.id,
              quantity: product.quantity,
              price: product.price,
            };
          });

          const { status } = await api.post(
            '/orders',
            { products },
            {
              validateStatus: () => true
            });

          if (status === 200 || status === 201) {

            setTimeout(() => {
            navigate(
              `/complite?payment_intent_client_secret=${paymentIntent.client_secret}`,
            );
          }, 3000);


            clearCart();
            toast.success('Pedido realizado com sucesso!');
          } else if (status === 400) {
            toast.error('Falha ao realizar pedido! Tente novamente.')
          } else {
            throw new Error();
          }
        
      
        } catch (error) {
          toast.error('Falha no sistema! Tente novamente.');
        }

      } else {
        navigate(
          `/complite?payment_intent_client_secret=${paymentIntent.client_secret}`,
        );
      }
    

    setIsLoading(false);
    };


    const paymentElemetOptions = {
      layout: 'tabs',
    };

    return (
      <div className="container">
        <form id="payment-form" onSubmit={handleSubmit}>

          <PaymentElement id="payment-element" options={paymentElemetOptions} />
          <button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            className="button"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pagar agora"
              )}
            </span>
          </button>

          {message && <div id="payment-message">{message}</div>}
        </form>


        <div id="dpn-annotation">
          <p>
            Os métodos de pagamento são disponibilizados de acordocom a sua região.&nbsp;
            <a
              href={dpnCheckerLinck}
              target="_blank"
              rel="nopopener noreferrer"
              id="dpm-integration-checker"
            >
              Ver métodos de pagamento!
            </a>
          </p>
        </div>
      </div>
    );
   } 
  