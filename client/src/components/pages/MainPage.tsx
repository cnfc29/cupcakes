import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getCupcakesThunk } from '../../redux/slices/groupThunkActions';
import NavBar from '../ui/NavBar';

export default function MainPAge(): JSX.Element {
  const cupcakes = useAppSelector((state) => state.group.cupcakes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getCupcakesThunk());
  }, [dispatch]);
  return (
      <div>Боди</div>
  );
}
