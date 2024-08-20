import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../common/Input'
import Select from '../../common/Select'
import Switcher from '../../common/Switcher'
import Button from '../../common/Button'
import { useTranslation } from 'react-i18next'
import './IntroDetails.css'

const IntroDetailsForm = ({ values, onChange, onSubmit }) => {
  const { t } = useTranslation()

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="carType"
        type="text"
        value={values.carType}
        onChange={onChange}
        label={t('carType')}
      />
      <Select
        name="fuelType"
        value={values.fuelType}
        onChange={onChange}
        label="Тип топлива"
        options={['Бензин', 'Дизель', 'Газ', 'Электро']}
      />
      <Input
        name="fuelConsumption"
        type="number"
        value={values.fuelConsumption}
        onChange={onChange}
        label="Средний расход (л/100км)"
      />
      <Input
        name="restInterval"
        type="number"
        value={values.restInterval}
        onChange={onChange}
        label="Интервал отдыха (часы)"
      />
      <Input
        name="dailyDistance"
        type="number"
        value={values.dailyDistance}
        onChange={onChange}
        label="Дневной путь (км)"
      />
      <Switcher
        name="familyTrip"
        checked={values.familyTrip}
        onChange={onChange}
        label="Семейная поездка"
      />
      <Switcher
        name="findHotel"
        checked={values.findHotel}
        onChange={onChange}
        label="Хочу найти отель"
      />
      <Switcher
        name="saveTrip"
        checked={values.saveTrip}
        onChange={onChange}
        label="Сохранить для будущих поездок"
      />
      <div className="d-flex justify-content-between">
        <a href="/" className="btn btn-secondary">
          Back
        </a>
        <a href="/step2" className="btn btn-primary">
          Next
        </a>
      </div>
    </form>
  )
}

IntroDetailsForm.propTypes = {
  values: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default IntroDetailsForm
