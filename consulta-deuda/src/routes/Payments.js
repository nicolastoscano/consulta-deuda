import PaymentCard from "../components/PaymentCard";
import payments from "../solo-demo/DBPagos.json";

function Payments() {
  console.log(payments);

  return (
    <div className=" p-5">
      {payments.map((payment) => (
        <PaymentCard {...payment} />
      ))}
    </div>
  );
}

export default Payments;
