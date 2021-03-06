package jp.co.ucl.ISOPM.service;

import jp.co.ucl.ISOPM.dao.StaffDao;
import jp.co.ucl.ISOPM.entity.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by ZhenYang on 2017/02/19.
 */
@Service
public class StaffService {
    @Autowired
    StaffDao staffDao;

    /**
     * list all staff
     * @return
     */
    public List<Staff> listAll() {
        return staffDao.listAll();
    }

    public Staff getStaffById(int id) {
        return staffDao.getStaffById(id);
    }
}
