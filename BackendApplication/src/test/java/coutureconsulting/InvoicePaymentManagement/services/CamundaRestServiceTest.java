package coutureconsulting.InvoicePaymentManagement.services;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class CamundaRestServiceTest {
    @Mock
    private CamundaRestService camundaRestService;


    @Test
    void getTasksTest(){
        String result = this.camundaRestService.getTasks();
        System.out.println(result);
        assertThat(!result.isBlank());
    }
}
