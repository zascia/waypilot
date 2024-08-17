import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../common/Input'
import Select from '../../common/Select'
import Switcher from '../../common/Switcher'
import Button from '../../common/Button'
import { useTranslation } from 'react-i18next'

const UserForm = ({ values, onChange, onSubmit }) => {
  const { t } = useTranslation()
  console.log('values', values)

  return (
    <div className="container mt-5">
      <h2>Plan Your Route</h2>
      <form onSubmit={onSubmit}>
        <Input
          name="carType"
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
          value={values.fuelConsumption}
          onChange={onChange}
          label="Средний расход (л/100км)"
        />
        <Input
          name="restInterval"
          value={values.restInterval}
          onChange={onChange}
          label="Интервал отдыха (часы)"
        />
        <Input
          name="dailyDistance"
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
        <Button label={t('findBtnText')} type="submit" onClick={onSubmit} />
      </form>
    </div>
  )
}

UserForm.propTypes = {
  values: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default UserForm
