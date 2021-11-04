import { ArrowRight } from '@mui/icons-material';
import { Button, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import declOfNum from '../../utils/declOfNum';
import FormComponent from '../common/form';
import NumberField from '../common/form/numberField';
import Title from '../common/typography/title';
import MyAccordion from './accordion';

const initialState = { adults: 0, children: 0, babies: 0 };
const SearchRoomsForm = () => {
  const [data, setData] = useState(initialState);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(data);
  };

  // const handleChange = useCallback(target => {
  //   console.log(target.name);
  //   setData(prevState => ({
  //     ...prevState,
  //     [target.name]: target.value,
  //   }));
  // }, []);

  const handleReset = () => {
    setData(initialState);
  };

  const validatorConfig = {};

  const getAccordionLabel = () => {
    const countGuests = data.adults + data.children + data.babies;
    const countBabies = data.babies;
    const guestsStr = `${countGuests} ${declOfNum(countGuests, ['гость', 'гостя', 'гостей'])}`;
    const babiesStr = `${countBabies} ${declOfNum(countBabies, ['младенец', 'младенца', 'младенцев'])}`;
    if (countGuests > 0 && countBabies > 0) {
      return `${guestsStr} ${babiesStr}`;
    }

    if (countGuests > 0) {
      return guestsStr;
    }
    return 'Сколько гостей';
  };

  return (
    <>
      <FormComponent onSubmit={handleSubmit} validatorConfig={validatorConfig} defaultData={data}></FormComponent>
      <Card raised sx={{ mt: '70px', padding: '30px', paddingTop: '40px', background: '#fff', width: 380 }}>
        <Title isBold>Найдём номера под ваши пожелания</Title>
        {/* <FormComponent onSubmit={handleSubmit} validatorConfig={validatorConfig} defaultData={data}></FormComponent> */}
        <form>
          <Typography sx={{ marginTop: '20px', fontWeight: 700 }}>Гости</Typography>
          <MyAccordion label={getAccordionLabel()}>
            <NumberField label='Взрослые' name='adults' data={data} setData={setData} />
            <NumberField label='Дети' name='children' data={data} setData={setData} />
            <NumberField label='Младенцы' name='babies' data={data} setData={setData} />
            <Button variant='outlined' size='small' onClick={handleReset} sx={{ mt: '15px' }}>
              Очистить
            </Button>
          </MyAccordion>
          <Button
            variant='contained'
            size='large'
            color='primary'
            endIcon={<ArrowRight />}
            sx={{ mt: '30px' }}
            onClick={handleSubmit}
            fullWidth
          >
            Подобрать номер
          </Button>
        </form>
      </Card>
    </>
  );
};

export default SearchRoomsForm;
