public class Node
{
   private T data;
   private Node next;
   
   public Node()
   {
      data = null;   //next is automatically set to Null
   }
   
   public Node(T data, Node next)
   {
      this.data = data;
      this.next = next;
   }
   
   public T getData()
   {
      return this.data;
   }
   
   public Node getNext()
   {
      return next;
   }
   
   public void setData(T a)
   {
      data = a;
   }
   
   public void setNext(Node nextNode)
   {
      next = nextNode;
   }
   
   //@override
   
   public String toString()
   {
      System.out.print("Node: "+ toString(data));
   }
   
}

public class LinkListWithGenerics
{
   private Node first;
   
   public LinkListWithGenerics()
   {
      first = null;
   }
   
   public boolean isEmpty()          
   {
      return (first == null);
   }
  
  // insert at start of list
   public void insertFirst(T data)
   {                           // make new link
      Node newLink = new Node(data, null);
      newLink.next = first;       // newLink --> old first
      this.first = newLink;            // first --> newLink
   }
// -------------------------------------------------------------
   public Node deleteFirst()      // delete first item
   {                           // (assumes list not empty)
      Link temp = first;          // save reference to node
      first = first.next;         // delete it: first-->old next
      return temp;                // return deleted node
   }
// -------------------------------------------------------------
   @override
   
   public String toString()
   {
      String result = "List (first-->last): ";
      Node current = first;       // start at beginning of list
      while(current != null)      // until end of list,
      {
         result += current.toString();   // append data
         current = current.next;  // move to next node
      }
      result +="\n";
      
      return result;
   }

}

public class LinkListWithGenericsDemo
{
   public static void main(String[] args)
   {
      LinkListWithGenerics theList = new LinkListWithGenerics();  // make new list
   
      theList.insertFirst(22);      // insert four items
      theList.insertFirst(44);
      theList.insertFirst(66);
      theList.insertFirst(88);
   
      System.out.println(theList);             // display list
      }  // end main()
} 
