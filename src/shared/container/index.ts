import { container } from 'tsyringe';

import '@modules/users/providers';

import IAppointmentsRepository from "@modules/appointments/repositories/IAppointmentsRepository";
import AppointmentsRepository from "@modules/appointments/infra/typeorm/repositories/AppointmentsRepository";

import IUSersRepository from "@modules/users/repositories/IUsersRepository";
import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";

container.registerSingleton<IAppointmentsRepository>('AppointmentsRepository', AppointmentsRepository);

container.registerSingleton<IUSersRepository>('UsersRepository', UsersRepository);
