//here the contract that every subject will have 
// this contrac explanins how to register observer to specific subject
//how unrgister observer to specific subject 
//and how to notifyObsever when something happens on specific subject 

package obsever.pattern.demo;
import java.util.*;

interface ISubject{

    void register(Observer o ); 
    void unregister(Observer o);
    void notifyObservers();
}