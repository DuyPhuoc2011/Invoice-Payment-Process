package com.coutureconsulting.payment.workflow;

import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URL;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

import com.box.sdk.BoxFile;
import com.coutureconsulting.payment.utils.BoxIntergration;

public class UploadFileDelegate implements JavaDelegate {

    public void execute(DelegateExecution execution) throws Exception {

      //FileInputStream stream = new FileInputStream("C:/temp/MyInvoice.pdf");
      InputStream  stream = (InputStream ) execution.getVariable("invoiceDocument");
      String fileName = (String ) execution.getVariable("invoiceNumber");
      
      String fileId = BoxIntergration.uploadFile(stream, fileName + ".pdf");
      stream.close();

      execution.setVariable("fileID", fileId);

      URL embedLink = BoxIntergration.getPreviewLink(fileId);
      execution.setVariable("previewLink", embedLink.toString());
    }
}
