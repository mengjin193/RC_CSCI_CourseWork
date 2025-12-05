class Node <T>
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
      this.next = nextNode;
   }
   
   //@override
   
   public String toString()
   {
      return ("Node: "+ data.toString());
   }
   
}

class LinkListWithGenerics <T>
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
      Node newNode = new Node(data, null);
      newNode.setNext(first);       // newLink --> old first
      this.first = newNode;            // first --> newLink
   }
// -------------------------------------------------------------
   public Node deleteFirst()      // delete first item
   {                           // (assumes list not empty)
      Node temp = first;          // save reference to node
      first = first.getNext();         // delete it: first-->old next
      return temp;                // return deleted node
   }
// -------------------------------------------------------------
  // @override
   
   public String toString()
   {
      String result = "List (first-->last): ";
      Node current = first;       // start at beginning of list
      while(current != null)      // until end of list,
      {
         result +=(" " + current.toString() + ",");   // append data
         current = current.getNext();  // move to next node
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
   
      theList.insertFirst(22.3);      // insert four items
      theList.insertFirst(44.6);
      theList.insertFirst(66.0);
      theList.insertFirst(88.7);
   
      System.out.println(theList);             // display list
   }  // end main()
} 
