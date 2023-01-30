package com.coutureconsulting.payment.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

import com.box.sdk.BoxAPIConnection;
import com.box.sdk.BoxFile;
import com.box.sdk.BoxFolder;
import com.box.sdk.BoxItem;

public class BoxIntergration {

  static String boxToken = "qMxmj92PE9GmEMgzEGz2APWC8atN9TUA"; //Box App token

  public static void main(String... args) throws IOException {

    FileInputStream stream = new FileInputStream("C:/temp/MyInvoice.pdf");
    uploadFile(stream, "MyInvoice.pdf");
    stream.close();
  }

  public static String uploadFile(InputStream stream, String fileName) throws IOException {
    BoxAPIConnection api = new BoxAPIConnection(boxToken);

    BoxFolder rootFolder = BoxFolder.getRootFolder(api);
    BoxFile.Info newFileInfo = rootFolder.uploadFile(stream, fileName);
    
    String fileId = newFileInfo.getID();
    System.out.println("File ID: " + fileId);
    return fileId;
  }

  public static URL getPreviewLink(String fileId) throws IOException {
    BoxAPIConnection api = new BoxAPIConnection(boxToken);

    BoxFile file = new BoxFile(api, fileId);
    URL embedLink = file.getPreviewLink();
    
    System.out.println("embedLink: " + embedLink);
    return embedLink;
  }

}