import * as yup from 'yup';

export const dashboardValidationSchema = yup.object().shape({
  last_login: yup.date().nullable(),
  active_status: yup.boolean().required(),
  assigned_cars: yup.number().integer().nullable(),
  total_bookings: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
