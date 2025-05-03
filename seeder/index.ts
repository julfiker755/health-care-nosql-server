import mongoose from 'mongoose';
import { doctorItem, patientItem, adminItem } from './data';
import { patientService } from '../src/app/modules/patient/patient.service';
import { doctorService } from '../src/app/modules/doctor/doctor.service';
import { adminService } from '../src/app/modules/admin/admin.serviec';
import config from '../src/app/config';

const StoreData = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('✅ Connected to MongoDB');

    // **************Store Admins
    for (const item of adminItem) {
      const reuslt = await adminService.adminStoreBD(item);
      console.log(reuslt);
    }

    // ************** Store Doctors
    for (const item of doctorItem) {
      const reuslt = await doctorService.doctorStoreBD(item);
      console.log(reuslt);
    }
    // ************** Store Patients
    for (const item of patientItem) {
      const reuslt = await patientService.patientStoreBD(item);
      console.log(reuslt);
    }

    console.log(`Stored successfully`);
  } catch (error) {
    console.error('❌ Error occurred during data storage:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 MongoDB disconnected');
  }
};

StoreData();
