import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { setCheckout } from '../../../services/player';

export default function CheckoutConfirmastion() {
  const [checkbox, setCheckBox] = useState(false);
  const router = useRouter();
  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem('data-item');
    const dataTopUpLocal = localStorage.getItem('data-topup');

    const dataItem = JSON.parse(dataItemLocal!);
    const dataTopUp = JSON.parse(dataTopUpLocal!);
    if (!checkbox) {
      toast.error('Pastikan anda telah melakukan pembayaran');
      return;
    }
    const data = {
      voucher: dataItem._id,
      nominal: dataTopUp.nominalItem._id,
      payment: dataTopUp.paymentItem.payment._id,
      bank: dataTopUp.paymentItem.bank._id,
      name: dataTopUp.bankAccountName,
      accountUser: dataTopUp.verifyID,
    };
    const response = await setCheckout(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      // [CODE UPDATE] memindahkan router.push sebelum toast
      router.push('/complete-checkout');
      toast.success('Checkout Berhasil');
    }
  };
  return (
    <>
      <label htmlFor="check" className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input id="check" type="checkbox" checked={checkbox} onChange={() => setCheckBox(!checkbox)} />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm
          Payment
        </button>
      </div>
    </>
  );
}
